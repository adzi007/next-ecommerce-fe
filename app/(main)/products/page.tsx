// import { getProducts } from "./actions";
import { ProductList } from "./components/product-list";
import { dummyProducts } from "@/data/products";

export default async function Page() {
  // const products = await getProducts();
  const products = dummyProducts.data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <ProductList products={products} />
    </div>
  );
}
    
