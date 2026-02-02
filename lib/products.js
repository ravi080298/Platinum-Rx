export const products = [
  {
    id: "p1",
    name: "Daily Multivitamin — 60 Capsules",
    slug: "daily-multivitamin-60",
    price: 19.99,
    rating: 4.6,
    reviews: 234,
    image:
      "https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_960_720.jpg",
    badges: ["Bestseller"],
    description:
      "Comprehensive daily multivitamin to support overall wellness and energy.",
    inStock: true,
  },
  {
    id: "p2",
    name: "Vitamin D3 2000 IU — 120 Softgels",
    slug: "vitamin-d3-2000-120",
    price: 12.49,
    rating: 4.8,
    reviews: 512,
    image:
      "https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_960_720.jpg",
    badges: ["Top Rated"],
    description: "High-potency Vitamin D3 to support bone and immune health.",
    inStock: true,
  },
  {
    id: "p3",
    name: "Omega-3 Fish Oil 1000mg — 90 Caps",
    slug: "omega3-fish-oil-1000-90",
    price: 21.0,
    rating: 4.4,
    reviews: 147,
    image:
      "https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_960_720.jpg",
    badges: [],
    description: "Sustainably sourced fish oil for heart and brain support.",
    inStock: true,
  },
  {
    id: "p4",
    name: "Probiotic 25 Billion CFU — 30 Capsules",
    slug: "probiotic-25b-30",
    price: 24.5,
    rating: 4.5,
    reviews: 89,
    image:
      "https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_960_720.jpg",
    badges: ["New"],
    description: "Daily probiotic to promote digestive balance and gut health.",
    inStock: false,
  },
  {
    id: "p5",
    name: "Magnesium Glycinate — 120 Tablets",
    slug: "magnesium-glycinate-120",
    price: 16.75,
    rating: 4.3,
    reviews: 76,
    image:
      "https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_960_720.jpg",
    badges: [],
    description:
      "Gentle, highly-absorbable magnesium to support sleep and relaxation.",
    inStock: true,
  },
];

export function getProductsByCategory(slug) {
  // For this example we return all products for any category slug.
  // In a real app, filter products by category metadata.
  return products;
}
