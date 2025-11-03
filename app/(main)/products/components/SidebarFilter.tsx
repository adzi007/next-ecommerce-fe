"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import FormFilter from './FormFilter'
import { Button } from '@/components/ui/button'
import { useProductFilterStore } from '../store/productFilter.store'

export default function SidebarFilter() {

    const { filterProduct } = useProductFilterStore();


    const hanldeFilter = () => {

        console.log("filterProduct >>> ", filterProduct);
        

    }


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
                        <Button variant="outline" className="w-full hover:cursor-pointer">Reset</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
