import { Cake, Heart, Star } from "lucide-react";

export const features = [
  {
    icon: Cake,
    title: "Fresh Daily",
    description: "Baked fresh every morning using premium ingredients"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Crafted with passion and attention to detail"
  },
  {
    icon: Star,
    title: "Quality First",
    description: "Only the finest ingredients make it into our recipes"
  }
] as const;