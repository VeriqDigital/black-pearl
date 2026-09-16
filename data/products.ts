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
    color: "A romantic swirl of sun-ripened strawberries and warm vanilla cream",
  },
  {
    id: "pink-obsession",
    name: "Pink Obsession",
    price: 22,
    category: "candles",
    image: "Pink Obsession Candle.png",
    detail: "Pink Obsession Candle Top.png",
    color: "A lush of juicy fruits and soft florals wrapped in a warm, addictive finish",
  },
  {
    id: "mystique-island",
    name: "Mystique Island",
    price: 22,
    category: "candles",
    image: "Mystique Island Candle.png",
    detail: "Mystique Island Candle Top.png",
    color: "Sweet pineapple melts into earthy sage with a bold, irresistible edge",
  },
  {
    id: "exotic-temptation-wax-melt",
    name: "Exotic Temptation",
    price: 9,
    category: "melts",
    image: "Exotic Temptation Wax Melt.png",
    detail: "Exotic Temptation Wax Melt Back.png",
    color: "Sharp grapefruit meets sultry mangosteen in a bold, citrusy seduction",
  },
  {
    id: "citrus-seduction-wax-melt",
    name: "Citrus Seduction",
    price: 9,
    category: "melts",
    image: "Citrus Seduction Wax Melt.png",
    detail: "Citrus Seduction Wax Melt Back.png",
    color: "Sweet lemonade meets bold cherry in a fresh tempting twist",
  },
  {
    id: "citrus-seduction",
    name: "Citrus Seduction",
    price: 22,
    category: "candles",
    image: "Citrus Seduction Candle.png",
    detail: "Citrus Seduction Candle Top.png",
    color: "Sweet lemonade meets bold cherry in a fresh, tempting twist",
  },
  {
    id: "exotic-temptation",
    name: "Exotic Temptation",
    price: 22,
    category: "candles",
    image: "Exotic Temptation Candle.png",
    detail: "Exotic Temptation Candle Top.png",
    color: "Sharp grapefruit meets sultry mangosteen in a bold, citrusy seduction",
  },
];
export const productImage = (name: string) => `/images/${name}`;
export const priceLabel = (price: number) => `$${price.toFixed(2)}`;
