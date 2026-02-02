"use client";

import ProductGrid from "../components/Productgrid/ProductGrid";
import { products } from "../lib/products";

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        PlatinumRX Products
      </h1>
      <ProductGrid products={products} />
    </main>
  );
}
