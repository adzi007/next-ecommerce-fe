import { Product } from "../types";
import { ProductCard } from "./product-card";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
