import { products } from "../../../lib/products";
import type { Product } from "../../../lib/products";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const prod = products.find((p) => p.slug === params.slug);
  if (!prod) return { title: "Product — PlatinumRX" };
  return { title: `${prod.name} — PlatinumRX` };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product: Product | undefined = products.find(
    (p) => p.slug === params.slug,
  );
  if (!product) return notFound();

  return (
    <main style={{ padding: 28, maxWidth: 900, margin: "0 auto" }}>
      <nav style={{ marginBottom: 12 }}>
        <a href="/">Home</a> / <a href="/">Products</a> /{" "}
        <span aria-current="page">{product.name}</span>
      </nav>

      <section
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: 10, objectFit: "cover" }}
          />
        </div>

        <div>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <p style={{ color: "#6b7280" }}>{product.badges?.join(" • ")}</p>
          <h2 style={{ color: "#111827" }}>${product.price.toFixed(2)}</h2>
          <p>{product.description}</p>
          <p>
            {product.rating} ★ · {product.reviews} reviews
          </p>
          <button
            style={{
              background: "#2563eb",
              color: "white",
              padding: "10px 14px",
              borderRadius: 8,
              border: "none",
            }}
          >
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}
