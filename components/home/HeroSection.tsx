"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Fresh baked goods"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Baking Happiness Daily</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Crafting moments of joy with every freshly baked creation
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Explore Our Menu <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}