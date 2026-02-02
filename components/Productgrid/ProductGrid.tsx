import React from "react";
import ProductCard from "../Productcard/ProductCard";
import { Grid } from "./ProductGrid.styles";
import type { Product } from "../../lib/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <Grid aria-live="polite">
      {products.map((p, idx) => (
        <li key={p.id}>
          <ProductCard product={p} isFirst={idx === 0} />
        </li>
      ))}
    </Grid>
  );
}
