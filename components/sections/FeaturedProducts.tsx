"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
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
          <p>{product.color}.</p>
          <div className="preview-details">
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

// Only URL synchronization may suspend during prerendering, never the grid.
function ProductQuerySync({ onChange }: { onChange: (query: string) => void }) {
  const params = useSearchParams();
  const query = params.toString();
  useEffect(() => {
    onChange(query);
  }, [query, onChange]);
  return null;
}

export default function FeaturedProducts() {
  const [filter, setFilter] = useState("featured");
  const [selected, setSelected] = useState<Product | undefined>();
  const [query, setQuery] = useState("");
  const syncQuery = useCallback((nextQuery: string) => {
    const params = new URLSearchParams(nextQuery);
    const collection = params.get("collection");
    setQuery(nextQuery);
    setFilter(
      collection === "candles" || collection === "melts"
        ? collection
        : "featured",
    );
    setSelected(
      products.find((product) => product.id === params.get("product")),
    );
  }, []);
  const visibleProducts =
    filter === "featured"
      ? products.slice(0, 4)
      : filter === "all"
        ? products
        : products.filter((product) => product.category === filter);
  return (
    <Section id="shop" tone="cream" className="featured-section">
      <Suspense fallback={null}>
        <ProductQuerySync onChange={syncQuery} />
      </Suspense>
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
            const nextParams = new URLSearchParams(query);
            if (nextParams.has("product")) {
              nextParams.delete("product");
              const query = nextParams.toString();
              window.history.replaceState(null, "", `/${query ? `?${query}` : ""}#shop`);
            }
          }}
        />
      )}
    </Section>
  );
}
