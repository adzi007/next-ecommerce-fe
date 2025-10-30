"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import React, { useCallback, useEffect } from 'react'
import { useProductFilterStore } from '../store/productFilter.store'

// const CATEGORIES = ["Electronics", "Fashion", "Home & Living", "Sports"];
const CATEGORIES = [
  { label: "Electronics", value: "electronics" },
  { label: "Fashion", value: "fashion" },
  { label: "Home & Living", value: "home" },
  { label: "Sports", value: "sports" },
];

const SORT_OPTIONS = [
  { label: "From Cheapest", value: "cheapest" },
  { label: "From Most Expensive", value: "expensive" },
  { label: "Most Popular", value: "popular" },
];

export default function FormFilter() {

    const {
        filterProduct,
        setCategory,
        setPriceMin,
        setPriceMax,
        setRating,
        setOrderBy,
    } = useProductFilterStore()

    // Handlers
    const handleCategoryChange = useCallback(
        (value: string) => {
            setCategory(value);
        },
        [setCategory]
    );

    const handlePriceRangeChange = useCallback(
        (value: number[]) => {
        // Slider returns [min, max]
            setPriceMin(value[0]);
            setPriceMax(value[1]);
        },
        [setPriceMin, setPriceMax]
    );

    const handlePriceMinInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const v = Number(e.target.value);
            if (!Number.isNaN(v)) {
                // ensure not greater than max
                const newMin = Math.min(v, filterProduct.priceMax);
                setPriceMin(newMin);
            }
        },
        [setPriceMin, filterProduct.priceMax]
    );

    const handlePriceMaxInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const v = Number(e.target.value);
            if (!Number.isNaN(v)) {
                const newMax = Math.max(v, filterProduct.priceMin);
                setPriceMax(newMax);
            }
        },
        [setPriceMax, filterProduct.priceMin]
    );

    const handleRatingToggle = useCallback(
        (ratingValue: number) => {
            // your store's setRating toggles the presence of rating,
            // so call it when user toggles checkbox.
            // We ignore `checked` here because setRating toggles.
            setRating(ratingValue);
        },
        [setRating]
    );

    const handleSortChange = useCallback(
        (value: string) => {
        setOrderBy(value);
        },
        [setOrderBy]
    );

    //useEffect(() => {
    //  console.log("filterProduct >>> ", filterProduct);
    //}, [filterProduct])
  

    return (
        <>
            {/* Category */}
            <div className="space-y-2 mb-8">

                <Label htmlFor="category">Category</Label>
                <Select value={filterProduct.category || ""} onValueChange={(val) => handleCategoryChange(val)}>
                    <SelectTrigger id="category" className="w-full">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        { CATEGORIES.map((cat,i) => <SelectItem key={i} value={cat.value}>{ cat.label }</SelectItem> ) }

                        {/* <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="home">Home & Living</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem> */}
                    </SelectContent>
                </Select>
            </div>

            <Separator />

            {/* Price Range */}
            <div className="space-y-3 my-6">

                <Label>Price Range</Label>

                <div className="flex items-center gap-2 w-full justify-between mb-6">
                    <input
                        type="number"
                        min={filterProduct.priceDefaultMin}
                        max={filterProduct.priceDefaultMax}
                        value={filterProduct.priceMin}
                        onChange={handlePriceMinInput}
                        className="lg:w-24 w-[45%] border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Min"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        min={filterProduct.priceDefaultMin}
                        max={filterProduct.priceDefaultMax}
                        value={filterProduct.priceMax}
                        onChange={handlePriceMaxInput}
                        className="lg:w-24 w-[45%] border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Max"
                    />
                </div>

                <Slider
                    min={filterProduct.priceDefaultMin}
                    max={filterProduct.priceDefaultMax}
                    step={10}
                    value={[filterProduct.priceMin, filterProduct.priceMax]}
                    onValueChange={handlePriceRangeChange}
                />
                <p className="text-xs text-gray-500">From ${filterProduct.priceMin} to ${filterProduct.priceMax}</p>
            </div>

            <Separator />

            {/* Rating */}
            <div className="space-y-3 my-6">
                <Label>Customer Rating</Label>
                <div className="flex flex-col space-y-2">

                    <div className="flex items-center space-x-2">
                        <Checkbox 
                            id="rating5" 
                            className="size-5" 
                            checked={filterProduct.rating?.includes(5) || false} 
                            onCheckedChange={() => handleRatingToggle(5)}
                        />
                        <Label htmlFor="rating5">★★★★★ (5 stars)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox 
                            id="rating4up"  
                            className="size-5" 
                            checked={filterProduct.rating?.includes(4) || false}  
                            onCheckedChange={() => handleRatingToggle(4)}  />
                        <Label htmlFor="rating4up">★★★★ & up</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox 
                            id="rating3up"  
                            className="size-5" 
                            checked={filterProduct.rating?.includes(3) || false}  
                            onCheckedChange={() => handleRatingToggle(3)}  />
                        <Label htmlFor="rating3up">★★★ & up</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox 
                            id="rating2up"  
                            className="size-5" 
                            checked={filterProduct.rating?.includes(2) || false}  
                            onCheckedChange={() => handleRatingToggle(2)}  />
                        <Label htmlFor="rating2up">★★ & up</Label>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Order */}
            <div className="space-y-3 my-6">
                <Label>Sort By</Label>
                <RadioGroup value={filterProduct.orderBy || ""} onValueChange={(v) => handleSortChange(v)} className="flex flex-col space-y-1">
                    {SORT_OPTIONS.map((opt) => (
                        <div key={opt.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={opt.value} className="size-4" id={opt.value} />
                        <Label htmlFor={opt.value}>{opt.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        
        </>
    )
}
