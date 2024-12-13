import Image from "next/image";
import { Button } from "./button";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
}

export function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-primary font-bold">{price}</p>
        <Button variant="outline" className="w-full mt-4">
          Order Now
        </Button>
      </div>
    </div>
  );
}