"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductSidebar() {
  // const [price, setPrice] = useState([100])
  const [price, setPrice] = useState([0, 1000])


  return (
    <Card className="w-full rounded-md shadow-sm p-6 space-y-6 bg-white">
      <CardHeader className="px-0 pb-0 mb-0">
        <h2 className="text-lg font-semibold">Filter Products</h2>
      </CardHeader>

      <CardContent className="space-y-6 px-0">
        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home & Living</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-3">
          <Label>Price Range</Label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={price[0]}
              className="w-24 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              value={price[1]}
              className="w-24 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Max"
            />
          </div>
          <Slider
            min={0}
            max={1000}
            step={100}
            value={price}
            onValueChange={setPrice}
          />


          <p className="text-xs text-gray-500">From ${price[0]} to ${price[1]}</p>
        </div>

        <Separator />

        {/* Rating */}
        <div className="space-y-3">
          <Label>Customer Rating</Label>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="rating5" />
              <Label htmlFor="rating5">★★★★★ (5 stars)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rating4up" />
              <Label htmlFor="rating4up">★★★★ & up</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rating3up" />
              <Label htmlFor="rating3up">★★★ & up</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rating2up" />
              <Label htmlFor="rating2up">★★ & up</Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Order */}
        <div className="space-y-3">
          <Label>Sort By</Label>
          <RadioGroup defaultValue="cheapest" className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cheapest" id="cheapest" />
              <Label htmlFor="cheapest">From Cheapest</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="expensive" id="expensive" />
              <Label htmlFor="expensive">From Most Expensive</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="popular" id="popular" />
              <Label htmlFor="popular">Most Popular</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}
