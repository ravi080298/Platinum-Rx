import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, ImgWrap, Body, Title, Price, Meta, AddButton, Description } from "./ProductCard.styles";
import type { Product } from "../../lib/products";

export default function ProductCard({ product, isFirst }: { product: Product; isFirst?: boolean }) {
  return (
    <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
      <Card aria-labelledby={`p-${product.id}-title`}>
        <ImgWrap>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            {...(isFirst ? { priority: true } : {})}
          />
        </ImgWrap>
        <Body>
          <Title id={`p-${product.id}-title`}>{product.name}</Title>
          <Meta aria-hidden>{product.badges?.join(" • ")}</Meta>
          <Description>{product.description}</Description>
          <Price>${product.price.toFixed(2)}</Price>
          <Meta>
            {product.rating} ★ · {product.reviews} reviews
          </Meta>
          <AddButton aria-label={`Add ${product.name} to cart`}>
            Add to cart
          </AddButton>
        </Body>
      </Card>
    </Link>
  );
}
