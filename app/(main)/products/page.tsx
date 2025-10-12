import { getProducts } from "./actions";
import { ProductList } from "./components/product-list";

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <ProductList products={products} />
    </div>
  );
}
    
