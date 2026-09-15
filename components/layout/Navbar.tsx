"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/config/navigation";
import { products, productImage, priceLabel } from "@/data/products";
import Modal from "@/components/ui/Modal";
import {
  Arrow,
  BagIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/Icons";

export default function Navbar() {
  const [panel, setPanel] = useState<
    "menu" | "search" | "account" | "bag" | null
  >(null);
  const [query, setQuery] = useState("");
  const results = products.filter((product) =>
    `${product.name} ${product.category === "candles" ? "soy candle" : "wax melt"}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <div className="announcement">
        Hand-poured soy candles &amp; wax melts <span>·</span>
        <span className="announcement-extra"> Elevate your everyday</span>
      </div>
      <header className="site-header">
        <nav className="header-inner" aria-label="Main navigation">
          <div className="desktop-navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="icon-button mobile-menu-button"
            aria-label="Open navigation menu"
            onClick={() => setPanel("menu")}
          >
            <MenuIcon />
          </button>
          <Link
            href="/"
            className="brand"
            aria-label="Black Pearl Collectionz home"
          >
            <Image
              src="/images/Logo.png"
              width={60}
              height={61}
              alt=""
              className="brand-logo"
            />
            <span className="wordmark">
              <span className="wordmark-name">Black Pearl</span>
              <span className="wordmark-rule">Collectionz</span>
            </span>
          </Link>
          <div className="header-tools">
            <button
              className="icon-button"
              onClick={() => setPanel("search")}
              aria-label="Search products"
            >
              <SearchIcon />
            </button>
            <button
              className="icon-button account-button"
              onClick={() => setPanel("account")}
              aria-label="Your account"
            >
              <UserIcon />
            </button>
            <button
              className="icon-button bag-button"
              onClick={() => setPanel("bag")}
              aria-label="Shopping bag, 0 items"
            >
              <BagIcon />
              <span>0</span>
            </button>
          </div>
        </nav>
      </header>
      {panel && (
        <Modal
          title={
            {
              menu: "Navigation",
              search: "Search the collection",
              account: "Your account",
              bag: "Your shopping bag",
            }[panel]
          }
          onClose={() => setPanel(null)}
        >
          {panel === "menu" ? (
            <>
              <p className="eyebrow">Black Pearl Collectionz</p>
              <nav className="mobile-navigation" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setPanel(null)}
                  >
                    {item.label}
                    <Arrow />
                  </Link>
                ))}
                <button onClick={() => setPanel("account")}>
                  Your account <UserIcon />
                </button>
              </nav>
            </>
          ) : panel === "search" ? (
            <>
              <p className="eyebrow">Find your everyday luxury</p>
              <h2>Discover your favorite.</h2>
              <label className="search-label" htmlFor="product-search">
                Search candles &amp; wax melts
              </label>
              <div className="search-field">
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try Strawberry Allure…"
                />
                <SearchIcon />
              </div>
              <p className="search-count" aria-live="polite">
                {results.length} {results.length === 1 ? "product" : "products"}
              </p>
              <div className="search-results">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/?product=${product.id}#shop`}
                    onClick={() => setPanel(null)}
                  >
                    <Image
                      src={productImage(product.image)}
                      width={50}
                      height={64}
                      alt=""
                    />
                    <span>
                      {product.name}
                      <small>
                        {product.category === "candles"
                          ? "Soy candle"
                          : "Wax melt"}
                      </small>
                    </span>
                    <span>{priceLabel(product.price)}</span>
                  </Link>
                ))}
                {!results.length && (
                  <p>No matching scents. Try “candle” or “wax melt”.</p>
                )}
              </div>
            </>
          ) : (
            <div className="empty-panel">
              {panel === "bag" ? (
                <BagIcon width={38} height={38} />
              ) : (
                <UserIcon width={38} height={38} />
              )}
              <p className="eyebrow">A little luxury awaits</p>
              <h2>
                {panel === "bag"
                  ? "Your bag is waiting."
                  : "Make yourself at home."}
              </h2>
              <p>
                {panel === "bag"
                  ? "Find a fragrance that feels like you. Explore our hand-poured candles and wax melts."
                  : "A place for your favorite fragrances and everyday rituals."}
              </p>
              <Link
                className="solid-link"
                href="/#shop"
                onClick={() => setPanel(null)}
              >
                Explore the collection <Arrow />
              </Link>
              <p className="preview-note">
                Homepage preview ·{" "}
                {panel === "bag" ? "Purchasing" : "Account sign-in"} is not
                available yet.
              </p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}
