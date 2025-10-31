"use client"

import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { TbShoppingCartPlus } from "react-icons/tb"
import { FiHeart } from "react-icons/fi"
import { IoShareSocialOutline } from "react-icons/io5"

export default function ProductActions() {
  const [qty, setQty] = useState(1)

  return (
    <>
        <div className="mt-4">
            <p className="font-semibold text-gray-700">Quantity:</p>
            <div className="flex items-center mt-2">
                <button 
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="inline-flex size-10 p-3 shrink-0 items-center justify-center rounded-s-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                    <Minus />
                </button>
                <Input 
                    type="text" 
                    id="counter-input" 
                    data-input-counter 
                    className="w-10 shrink-0 border size-10 rounded-none bg-transparent shadow-none text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" 
                    placeholder="" 
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value) || 1)}
                    required 
                />
                    <button 
                        type="button" 
                        onClick={() => setQty((q) => q + 1)} 
                        className="inline-flex size-10 p-3 shrink-0 items-center justify-center rounded-e-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
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
    </>
  )
}
