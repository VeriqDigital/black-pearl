"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Section from "@/components/ui/Section";
import Modal from "@/components/ui/Modal";
import { Arrow } from "@/components/ui/Icons";
import {
  products,
  productImage,
  priceLabel,
  type Product,
} from "@/data/products";

function ProductPreview({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [detail, setDetail] = useState(false);
  return (
    <Modal title={product.name} onClose={onClose} wide>
      <div className="product-preview">
        <div>
          <div className="preview-image">
            <Image
              src={productImage(detail ? product.detail : product.image)}
              alt={`${product.name} ${detail ? "detail" : "front"} view`}
              fill
              sizes="(max-width: 700px) 80vw, 380px"
              loading="eager"
            />
          </div>
          <button
            className="text-link alternate-view"
            onClick={() => setDetail(!detail)}
          >
            View {detail ? "front" : "details"} <Arrow />
          </button>
        </div>
        <div className="preview-copy">
          <p className="eyebrow">
            Hand-poured{" "}
            {product.category === "candles" ? "soy candle" : "wax melt"}
          </p>
          <h2>{product.name}</h2>
          <p className="preview-price">{priceLabel(product.price)}</p>
          <p>
            {product.color}. Made by Black Pearl Collectionz to bring a little
            more comfort to the spaces you love.
          </p>
          <div className="preview-details">
            <span>Made in small batches</span>
            <span>Crafted with care by Queen Matlock</span>
          </div>
          <button className="solid-link" onClick={onClose}>
            Keep exploring <Arrow />
          </button>
          <p className="preview-note">
            Collection preview · Online purchasing coming soon.
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default function FeaturedProducts() {
  const router = useRouter();
  const params = useSearchParams();
  const collection = params.get("collection");
  const [filter, setFilter] = useState(
    collection === "candles" || collection === "melts"
      ? collection
      : "featured",
  );
  const [selected, setSelected] = useState<Product | undefined>(() =>
    products.find((product) => product.id === params.get("product")),
  );
  const [previousParams, setPreviousParams] = useState(params.toString());
  if (previousParams !== params.toString()) {
    setPreviousParams(params.toString());
    setFilter(
      collection === "candles" || collection === "melts"
        ? collection
        : "featured",
    );
    setSelected(
      products.find((product) => product.id === params.get("product")),
    );
  }
  const visibleProducts =
    filter === "featured"
      ? products.slice(0, 4)
      : filter === "all"
        ? products
        : products.filter((product) => product.category === filter);
  return (
    <Section id="shop" tone="cream" className="featured-section">
      <div className="section-top">
        <div>
          <p className="eyebrow">Our featured products</p>
          <h2>
            Find Your New <em>Favorite.</em>
          </h2>
          <p className="section-description">
            Handcrafted with care. Made to make your space feel like home.
          </p>
        </div>
        <div
          className="collection-filters"
          role="group"
          aria-label="Filter products"
        >
          {[
            { value: "featured", label: "Favorites" },
            { value: "candles", label: "Candles" },
            { value: "melts", label: "Wax melts" },
          ].map((item) => (
            <button
              key={item.value}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <button
              className="product-photo"
              onClick={() => setSelected(product)}
              aria-label={`View ${product.name} ${product.category === "candles" ? "candle" : "wax melt"}`}
            >
              <Image
                src={productImage(product.image)}
                alt={`${product.name} ${product.category === "melts" ? "wax melt package" : "soy candle in a glass vessel"} by Black Pearl Collectionz`}
                fill
                sizes="(max-width: 900px) 46vw, 23vw"
              />
              <span className="product-quick-view">
                Take a closer look <Arrow />
              </span>
            </button>
            <div className="product-meta">
              <div className="product-title-row">
                <h3>
                  <button onClick={() => setSelected(product)}>
                    {product.name}
                    {product.category === "melts" ? " Wax Melt" : ""}
                  </button>
                </h3>
                <span>{priceLabel(product.price)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="shop-all">
        <button
          className="solid-link"
          onClick={() => setFilter(filter === "all" ? "featured" : "all")}
        >
          {filter === "all" ? "Back to favorites" : "Shop all products"}
          <Arrow />
        </button>
      </div>
      {selected && (
        <ProductPreview
          key={selected.id}
          product={selected}
          onClose={() => {
            setSelected(undefined);
            if (params.has("product")) {
              const nextParams = new URLSearchParams(params.toString());
              nextParams.delete("product");
              const query = nextParams.toString();
              router.replace(`/${query ? `?${query}` : ""}#shop`, {
                scroll: false,
              });
            }
          }}
        />
      )}
    </Section>
  );
}
