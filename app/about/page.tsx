import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - BlissBurn Bakery",
  description: "Learn about our passion for baking and commitment to quality",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>
          
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Our bakery"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Founded in 2010, BlissBurn Bakery began with a simple mission: to bring joy 
              through the art of baking. Our journey started in a small kitchen with big dreams 
              and a passion for creating memorable experiences through food.
            </p>
            
            <p className="text-lg mb-6">
              Today, we continue to uphold our commitment to quality, using only the finest 
              ingredients and traditional baking methods passed down through generations. Every 
              morning, our master bakers arrive before dawn to ensure that our customers start 
              their day with the freshest baked goods possible.
            </p>

            <p className="text-lg">
              At BlissBurn, we believe that every bite should be an experience worth savoring. 
              This belief drives us to continuously innovate while staying true to the 
              time-honored techniques that make our creations special.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}