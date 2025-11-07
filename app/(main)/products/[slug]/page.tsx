import ProductGallery from "./components/ProductGallery";
import { ProductBreadcrumb } from "./components/ProductBreadcrumb";
import ProductActions from "./components/ProductActions";
import ProductInfo from "./components/ProductInfo";
import ProductOptions from "./components/ProductOptions";
import ProductDescription from "./components/ProductDescription";
import { fetchProductDetail } from "./services/product.service";

export default async function Page({ params }: { params: Promise<{ slug: string }>}) {

    const { slug } = await params

    const productresult = await fetchProductDetail(slug.split("-")[0]);
    
    let productGalery: any[] = []

    productresult.images.map((image: string, i: number) => productGalery.push({
        id: i, src: image, alt: "Product front view"
    }) )


    // TODO: fetch product data by slug
    const product = {
        id: productresult.id,
        name: productresult.title,
        price: productresult.price,
        brand: productresult.brand,
        category: {
            name:productresult.category,
            slug: productresult.category.toLowerCase().replace(/\s/g, '-')
        },
        stock: productresult.stock,
        stockStatus:  productresult.stock > 0 ? "In Stock":"Out Stock",
        // rating: productresult.rating,
        rating: Math.floor(productresult.rating),
        reviews: productresult.reviews.legth,
        images: productGalery,
        description: productresult.description,
        additionalInfo: `
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0.
        `,
    }

    return (

        <div className="lg:w-3/5 w-full mx-auto lg:px-4 px-0 lg:py-8 py-4">

            <ProductBreadcrumb name={product.name} category={product.category} />

            <section className="lg:py-6 py-4 lg:px-6 px-2 bg-white rounded-md shadow-md">

                <div className="max-w-screen-xl lg:px-4 px-2 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 gap-14">
                        <div className="w-full">
                             <ProductGallery images={product.images} />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <ProductInfo product={product} />
                            <ProductOptions />
                            <ProductActions />
                            <ProductDescription description={product.description} additionalInfo={product.additionalInfo} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
