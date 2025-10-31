import { FaStar } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"

export default function ProductInfo({ product }: any) {
  return (
    <>
      <Badge variant="default" className="px-3 bg-green-100 text-green-800">
        {product.stockStatus}
      </Badge>

      <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl mt-2">
        {product.name}
      </h1>

      <div className="flex mt-2">
        <a href="#" className="underline font-semibold text-gray-700">
          {product.brand}
        </a>
      </div>

      <div className="mt-2 flex items-center gap-2">
        {[...Array(product.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 size-4" />
        ))}
        <p className="text-sm text-gray-500">({product.rating.toFixed(1)})</p>
        <a href="#" className="text-sm underline text-gray-900 hover:no-underline">
          {product.reviews} Reviews
        </a>
      </div>

      <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl mt-4">
        ${product.price.toFixed(2)}
      </p>
    </>
  )
}

{/* <Badge variant="default" className="px-3 bg-green-100 text-green-800">In Stock</Badge>
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl mt-2">
                                Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
                                Mac OS, Pink
                            </h1>
                            <div className="flex mt-2">
                                <a href="" className="underline font-semibold text-gray-700">Ugreen</a>
                            </div>
                            <div className="mt-2 sm:items-center sm:gap-4 sm:flex">

                                <div className="flex items-center gap-2 sm:mt-0">
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400 size-4" />
                                        <FaStar className="text-yellow-400 size-4" />
                                        <FaStar className="text-yellow-400 size-4" />
                                        <FaStar className="text-yellow-400 size-4" />
                                        <FaStar className="text-yellow-400 size-4" />
                                    </div>
                                    <p className="text-sm font-medium leading-none text-gray-500">
                                        (5.0)
                                    </p>
                                    <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
                                        345 Reviews
                                    </a>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                    $1,249.99
                                </p>
                            </div> */}
