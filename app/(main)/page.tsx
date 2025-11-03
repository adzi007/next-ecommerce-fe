import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./products/components/product-card"; 
import { Product } from "./products/types";
import { NavLink } from "./components/nav-link";

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    slug:"wireless-headphones",
    priceSell: 99,
    image: "https://picsum.photos/id/1011/600/600",
  },
  {
    id: 2,
    name: "Smart Watch",
    slug:"smart-watch",
    priceSell: 149,
    image: "https://picsum.photos/id/1012/600/600",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    slug:"Gaming-mouse",
    priceSell: 59,
    image: "https://picsum.photos/id/1013/600/600",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    slug:"mechanical-keyboard",
    priceSell: 129,
    image: "https://picsum.photos/id/1014/600/600",
  },
];

export default function Home() {
  return (
     <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Upgrade Your Tech Gear
        </h1>
        <p className="text-muted-foreground mb-6 max-w-lg">
          Discover premium gadgets and accessories designed for performance and style.
        </p>
        <NavLink href="/products" >
          <Button size="lg" className="hover:cursor-pointer">Shop Now</Button>
        </NavLink>
        
      </section>

      {/* Product Section */}
      <section className="lg:w-3/5 w-full mx-auto lg:px-4 px-2 py-10">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
