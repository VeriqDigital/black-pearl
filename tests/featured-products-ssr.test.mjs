import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Run after `npm run build`; development mode does not reproduce the CSR bailout.
test('production HTML contains the default product grid between Hero and Story', () => {
  const html = readFileSync(new URL('../.next/server/app/index.html', import.meta.url), 'utf8');
  const hero = html.indexOf('class="hero"');
  const shop = html.indexOf('id="shop"');
  const story = html.indexOf('id="about"');
  assert.ok(hero >= 0 && shop > hero && story > shop, 'Hero → Products → Story must exist in the initial HTML');
  const section = html.slice(shop, story);
  assert.equal((section.match(/class="product-card"/g) || []).length, 4);
  for (const name of ['Strawberry Allure', 'Pink Obsession', 'Mystique Island', 'Exotic Temptation']) {
    assert.ok(section.includes(name), `${name} must be server-rendered`);
  }
  assert.match(section, /aria-pressed="true">Favorites<\/button>/);
});
