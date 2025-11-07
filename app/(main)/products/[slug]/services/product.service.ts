export async function fetchProductDetail(slug: string) {
  
    const res = await fetch(`https://dummyjson.com/products/${slug}`, {
        next: { revalidate: 60 }, // ISR: revalidate every 60s
    });

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.statusText}`);
  }

  return res.json();
}