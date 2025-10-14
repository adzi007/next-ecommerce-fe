"use client"
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash } from "lucide-react";
import { Product } from "../../products/types";

interface CartItemProps extends Product {
  qty: number;
}

export default function CartProductItem({ name, image, id, qty, priceSell }:CartItemProps) {

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            
                <a href="#" className="shrink-0 md:order-1">
                    <img className="h-20 w-20 block" src={image} alt="imac image" />
                </a>

                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                    <button type="button" className="inline-flex size-6 p-1 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                        <Plus />
                    </button>
                    <Input 
                        type="text" 
                        defaultValue={""} 
                        id="counter-input" 
                        data-input-counter 
                        className="w-10 shrink-0 border-0 bg-transparent shadow-none text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" 
                        placeholder="" 
                        value={qty} 
                        required 
                    />
                    <button type="button" className="inline-flex size-6 p-1 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                        <Minus />
                    </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                    <p className="text-base font-bold text-gray-900 dark:text-white">{ priceSell }</p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex flex-col gap-3 md:order-2 md:max-w-md">
                    <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{ name }</a>
                    <div>Rp. { priceSell * qty }</div>
                    <div className="flex items-center gap-4">
                        <button type="button" className="inline-flex items-center hover:cursor-pointer font-medium text-red-600 hover:underline dark:text-red-500 gap-1">
                            <Trash size={20} />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
