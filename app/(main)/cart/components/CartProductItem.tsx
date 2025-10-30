"use client"
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash } from "lucide-react";
import { Product } from "../../products/types";
import { useCartStore } from "@/store/cart.store";
import { ChangeEvent, useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps extends Product {
  qty: number;
}

export default function CartProductItem({ name, image, id, qty, priceSell, slug }:CartItemProps) {

    const [localQty, setlocalQty] = useState(qty)

    // useEffect(() => {
    //     setlocalQty(qty)
    //     useCartStore.getState().addItem({ name, image, id, qty, priceSell, slug })
    //     console.log("added on moun", qty);
    // }, [])

    const updateQtyHandle = (e: ChangeEvent<HTMLInputElement>) => {

        // do update zustand store and calculate sub total
        console.log("update zustand >> ", id, e.target.value);
        setlocalQty(parseInt(e.target.value))

    }
    

    return (
        <div className="rounded-sm border border-gray-200 bg-white lg:p-4 py-4 px-3 lg:shadow-sm md:p-6 lg:h-40 h-36" key={id}>
            <div className="flex gap-5">
            
                <img className="lg:h-28 lg:w-28 h-20 w-20 block" src={image} alt="imac image" />

                <div className="flex justify-between w-full">
                    <div className="flex w-[70%] flex-col gap-2 justify-evenly">
                        <a href="#" className="lg:text-lg text-sm font-medium text-gray-900 hover:underline">{ name }</a>
                        <p className="block lg:text-base text-sm text-gray-900">{ formatCurrency(priceSell) }</p>
                        <div className="flex items-center gap-4">
                            <button type="button" className="inline-flex items-center lg:text-base text-sm hover:cursor-pointer font-medium text-red-600 hover:underline gap-1">
                                <Trash className="lg:size-6 size-4" />
                                Remove
                            </button>
                        </div>
                    </div>
                    

                    <div className="flex lg:flex-row flex-col justify-between">

                        <div className="flex items-center lg:order-1 order-2">
                            <button type="button" className="inline-flex size-6 p-1 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                <Minus />
                            </button>
                            <Input 
                                type="text" 
                                id="counter-input" 
                                data-input-counter 
                                className="w-10 shrink-0 border-0 bg-transparent shadow-none text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" 
                                placeholder="" 
                                value={localQty}
                                onChange={updateQtyHandle}
                                required 
                            />
                            <button type="button" className="inline-flex size-6 p-1 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                <Plus />
                            </button>
                        </div>

                        <div className="flex justify-end md:w-32 items-center lg:order-2 order-1">
                            <p className="lg:text-base text-sm font-semibold text-gray-900">{ formatCurrency(priceSell * qty) }</p>
                        </div>

                    </div>
                    
                    {/* <p className="lg:hidden text-base font-bold text-gray-900 dark:text-white">{ formatCurrency(priceSell) }</p> */}

                    

                </div>






                {/* <div className="flex items-center justify-between lg:order-3 lg:justify-end">
                        <div className="flex items-center">
                            <button type="button" className="inline-flex size-6 p-1 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                <Minus />
                            </button>
                            <Input 
                                type="text" 
                                id="counter-input" 
                                data-input-counter 
                                className="w-10 shrink-0 border-0 bg-transparent shadow-none text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" 
                                placeholder="" 
                                value={localQty}
                                onChange={updateQtyHandle}
                                required 
                            />
                            <button type="button" className="inline-flex size-6 p-1 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                <Plus />
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
                </div> */}

            </div>
        </div>
    )
}
