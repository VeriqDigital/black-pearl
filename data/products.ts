export type Product = {
  id: string;
  name: string;
  price: number;
  category: "candles" | "melts";
  image: string;
  detail: string;
  color: string;
};
// Names and presentation prices are from the supplied client brief; this is not live inventory.
export const products: Product[] = [
  {
    id: "strawberry-allure",
    name: "Strawberry Allure",
    price: 22,
    category: "candles",
    image: "Strawberry Allure.png",
    detail: "Strawberry Allure Top.png",
    color: "A little everyday indulgence",
  },
  {
    id: "pink-obsession",
    name: "Pink Obsession",
    price: 22,
    category: "candles",
    image: "Pink Obsession Candle.png",
    detail: "Pink Obsession Candle Top.png",
    color: "Your moment to unwind",
  },
  {
    id: "mystique-island",
    name: "Mystique Island",
    price: 22,
    category: "candles",
    image: "Mystique Island Candle.png",
    detail: "Mystique Island Candle Top.png",
    color: "A beautiful escape at home",
  },
  {
    id: "exotic-temptation-wax-melt",
    name: "Exotic Temptation",
    price: 9,
    category: "melts",
    image: "Exotic Temptation Wax Melt.png",
    detail: "Exotic Temptation Wax Melt Back.png",
    color: "A little warmth, without the wick",
  },
  {
    id: "citrus-seduction",
    name: "Citrus Seduction",
    price: 22,
    category: "candles",
    image: "Citrus Seduction Candle.png",
    detail: "Citrus Seduction Candle Top.png",
    color: "Brighten your daily ritual",
  },
  {
    id: "exotic-temptation",
    name: "Exotic Temptation",
    price: 22,
    category: "candles",
    image: "Exotic Temptation Candle.png",
    detail: "Exotic Temptation Candle Top.png",
    color: "Make the evening yours",
  },
];
export const productImage = (name: string) => `/images/${name}`;
export const priceLabel = (price: number) => `$${price.toFixed(2)}`;
