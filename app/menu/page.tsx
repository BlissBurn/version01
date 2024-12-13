import { products } from "@/lib/constants/products";
import { ProductCard } from "@/components/ui/product-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - BlissBurn Bakery",
  description: "Explore our delicious selection of freshly baked goods",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}