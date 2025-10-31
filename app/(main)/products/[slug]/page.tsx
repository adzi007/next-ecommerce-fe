import ProductGallery from "./components/ProductGallery";
import { ProductBreadcrumb } from "./components/ProductBreadcrumb";
import ProductActions from "./components/ProductActions";
import ProductInfo from "./components/ProductInfo";
import ProductOptions from "./components/ProductOptions";
import ProductDescription from "./components/ProductDescription";

export default async function Page({ params }: { params: Promise<{ slug: string }>}) {

    const { slug } = await params

    // TODO: fetch product data by slug
    const product = {
        id: 1,
        name: 'Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink',
        price: 1249.99,
        brand: "Ugreen",
        category: {
            name:"Upper Wear",
            slug: "upper-wear"
        },
        stockStatus: "In Stock",
        rating: 5,
        reviews: 345,
        images: [
            { id: 1, src: "https://picsum.photos/id/1011/600/600", alt: "Product front view" },
            { id: 2, src: "https://picsum.photos/id/1018/600/600", alt: "Product side view" },
            { id: 3, src: "https://picsum.photos/id/1025/600/600", alt: "Product top view" },
            { id: 4, src: "https://picsum.photos/id/1035/600/600", alt: "Product detail view" },
            { id: 5, src: "https://picsum.photos/id/1042/600/600", alt: "Product packaging" }
        ],
        description: `
            Studio quality three mic array for crystal clear calls and voice recordings.
            Six-speaker sound system for a remarkably robust and high-quality audio experience.
        `,
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
