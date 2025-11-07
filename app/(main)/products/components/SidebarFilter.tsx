"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import FormFilter from './FormFilter'
import { Button } from '@/components/ui/button'
import { useProductFilterStore } from '../store/productFilter.store'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SidebarFilter() {

    const { filterProduct } = useProductFilterStore();
    const router        = useRouter();
    const searchParams  = useSearchParams();


    const hanldeFilter = () => {

        const params = new URLSearchParams(searchParams.toString());

        // console.log("filterProduct >>> ", filterProduct);

        if (filterProduct.category)
            params.set("category", filterProduct.category);
        else params.delete("category");

        if (filterProduct.orderBy)
            params.set("orderBy", filterProduct.orderBy);
        else params.delete("orderBy");

        if (filterProduct.priceMin !== undefined && filterProduct.priceMin > filterProduct.priceDefaultMin)
            params.set("priceMin", String(filterProduct.priceMin));
        else params.delete("priceMin");

        if (filterProduct.priceMax !== undefined && filterProduct.priceMax < filterProduct.priceDefaultMax)
            params.set("priceMax", String(filterProduct.priceMax));
        else params.delete("priceMax");

        if (filterProduct.rating && filterProduct.rating.length > 0)
            params.set("rating", filterProduct.rating.join(","));
        else params.delete("rating");

        // if (filterProduct.page)
        //     params.set("page", String(1));
        // else params.delete("page");

        params.set("page", String(1));


        if (filterProduct.searchKeywords)
            params.set("search", filterProduct.searchKeywords);
        else params.delete("search");

        // ✅ Push the updated URL without a full reload
        router.push(`?${params.toString()}`);
        
    }

    const handleReset = () => {
        router.push("/products"); // or your base route
    };


    return (
        <>
            <div className="space-y-1 mb-4">
                <h4 className="text-lg leading-none font-medium">Filter</h4>
            </div>
            <Card className="w-full rounded-md shadow-sm p-6 space-y-6 bg-white">
                <CardHeader className="px-0 pb-0 mb-0">
                    <h2 className="text-lg font-semibold">Filter Products</h2>
                </CardHeader>
                <CardContent className="space-y-6 px-0">
                    <FormFilter />

                    <div className="grid grid-cols-1 justify-between gap-3 w-full left-0">
                        <Button variant="default" className="w-full hover:cursor-pointer" onClick={hanldeFilter}>Filter</Button>
                        <Button variant="outline" className="w-full hover:cursor-pointer" onClick={handleReset}>Reset</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
