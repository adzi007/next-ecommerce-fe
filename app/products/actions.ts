export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // always fetch fresh data (or "force-cache" if you want caching)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
