"use client";

import { Button } from "@/components/ui/button";
import { Coffee, Utensils } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the warmth of freshly baked goods and the aroma of happiness
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Coffee className="mr-2" /> View Menu
          </Button>
          <Button variant="outline" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Utensils className="mr-2" /> Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  );
}