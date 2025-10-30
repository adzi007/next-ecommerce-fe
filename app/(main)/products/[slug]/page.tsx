import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import Link from "next/link"
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IoShareSocialOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import ProductGallery from "./components/ProductGallery";

export default async function Page({ params }: { params: Promise<{ slug: string }>}) {

    const { slug } = await params
    // console.log("slug >>> ", slug);

    const images = [
    { id: 1, src: "https://picsum.photos/id/1011/600/600", alt: "Product front view" },
    { id: 2, src: "https://picsum.photos/id/1018/600/600", alt: "Product side view" },
    { id: 3, src: "https://picsum.photos/id/1025/600/600", alt: "Product top view" },
    { id: 4, src: "https://picsum.photos/id/1035/600/600", alt: "Product detail view" },
    { id: 5, src: "https://picsum.photos/id/1042/600/600", alt: "Product packaging" },
    ]
    

    return (

        <div className="lg:w-3/5 w-full mx-auto lg:px-4 px-0 lg:py-8 py-4">

            <Breadcrumb className="lg:mb-6 mb-3 lg:px-0 px-4">
                <BreadcrumbList className="flex-nowrap">
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link className="lg:text-lg text-base" href="/">Product</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className="lg:text-lg text-base line-clamp-1" href="/components">Upper Wear</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="lg:text-lg text-base line-clamp-1">Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <section className="lg:py-6 py-4 lg:px-6 px-2 bg-white rounded-md shadow-md">
                <div className="max-w-screen-xl lg:px-4 px-2 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 gap-14">

                        <div className="w-full">
                            {/* <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" /> */}
                             <ProductGallery images={images} />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <Badge variant="default" className="px-3 bg-green-100 text-green-800">In Stock</Badge>
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
                            </div>

                            {/* <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" /> */}

                            <div className="mt-8">
                                <p className="font-semibold text-gray-700">Select Option:</p>
                                <ul className="grid w-full gap-1 lg:grid-cols-4 grid-cols-3 mt-2">
                                    <li>
                                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                                        <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-2 h-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                            <div className="block">
                                                <div className="w-full lg:font-semibold fornt-medium">0-50 MB</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                                        <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-2 h-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full lg:font-semibold fornt-medium">500-1000 MB</div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>

                            </div>

                            <div className="mt-4">
                                <p className="font-semibold text-gray-700">Quantity:</p>
                                <div className="flex items-center mt-2">
                                    <button type="button" className="inline-flex size-10 p-3 shrink-0 items-center justify-center rounded-s-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                        <Minus />
                                    </button>
                                    <Input 
                                        type="text" 
                                        id="counter-input" 
                                        data-input-counter 
                                        className="w-10 shrink-0 border size-10 rounded-none bg-transparent shadow-none text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" 
                                        placeholder="" 
                                        value={0}
                                        // onChange={updateQtyHandle}
                                        required 
                                    />
                                    <button type="button" className="inline-flex size-10 p-3 shrink-0 items-center justify-center rounded-e-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                        
                                        <Plus />
                                    </button>
                                </div>
                            </div>                         

                            <div className="mt-6 gap-3 flex flex-col">

                                <a href="#" title="" className="text-white mt-4 bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 focus:outline-none flex items-center justify-center" role="button" >
                                    <TbShoppingCartPlus size={19} className="me-2" />
                                    Add to cart
                                </a>

                                <a href="#" title="" className="flex items-center justify-center py-2.5 px-5 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100" role="button" >
                                    Buy Now
                                </a>

                                <div className="flex justify-center gap-4">
                                    <a href="#" title="" className="flex items-center justify-center py-2.5 px-1 text-sm font-medium text-gray-900 gap-4" role="button" >
                                        <FiHeart size={19} /> Add To Whistlist 
                                    </a>
                                    <a href="#" title="" className="flex items-center justify-center py-2.5 px-1 text-sm font-medium text-gray-900 gap-4" role="button" >
                                        <IoShareSocialOutline size={19} /> Share This Product 
                                    </a>
                                </div>
                               
                            </div>

                             

                            <hr className="mt-2 mb-4 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                Studio quality three mic array for crystal clear calls and voice
                                recordings. Six-speaker sound system for a remarkably robust and
                                high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                            </p>

                            <p className="text-gray-500 dark:text-gray-400">
                                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                                Magic Keyboard or Magic Keyboard with Touch ID.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}
