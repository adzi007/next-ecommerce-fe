"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

import { useState } from "react"
import { LuFilter } from "react-icons/lu"

export default function ModalFilter() {

    const [open, setOpen] = useState(false)
    const [price, setPrice] = useState([0, 1000])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="lg:hidden block p-2 rounded-sm bg-white border"><LuFilter size={20} /></DialogTrigger>
            <DialogContent showCloseButton={false} className="fixed p-0 h-screen w-full max-w-full flex flex-col bg-white rounded-none">
                <DialogHeader className="border-b py-2 flex-row items-center justify-between px-3">
                    <DialogTitle>Filter</DialogTitle>
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        <X className="w-6 h-6" />
                    </Button>
                </DialogHeader>

                <div className="py-2 px-3 overflow-y-auto">

                    <div className="space-y-2 mb-8">
                        <Label htmlFor="category" className="text-base">Category</Label>
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

                    <div className="space-y-3 my-6">
                        <Label className="text-base">Price Range</Label>
                        <div className="flex items-center gap-2 w-full justify-between mb-6">
                            <input
                                type="number"
                                value={price[0]}
                                className="w-[45%] border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="Min"
                            />

                            <span>-</span>

                            <input
                                type="number"
                                value={price[1]}
                                className="w-[45%] border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
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

                        <p className="text-sm mt-4 text-gray-500">From ${price[0]} to ${price[1]}</p>

                    </div>

                    <Separator />

                    <div className="space-y-3 my-6">
                        <Label className="text-base mb-2">Customer Rating</Label>
                        <div className="flex flex-col space-y-2 mt-2">

                            <div className="flex items-center space-x-2">
                                <Checkbox id="rating5" className="size-5" />
                                <Label className="" htmlFor="rating5">★★★★★ (5 stars)</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="rating4up" className="size-5" />
                                <Label className="" htmlFor="rating4up">★★★★ & up</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="rating3up" className="size-5" />
                                <Label className="" htmlFor="rating3up">★★★ & up</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="rating2up" className="size-5" />
                                <Label className="" htmlFor="rating2up">★★ & up</Label>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-3 my-6">

                        <Label className="text-base">Sort By</Label>

                        <RadioGroup defaultValue="cheapest" className="flex flex-col space-y-1">

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="cheapest" className="size-4" id="cheapest" />
                                <Label htmlFor="cheapest">From Cheapest</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="expensive" className="size-4" id="expensive" />
                                <Label htmlFor="expensive">From Most Expensive</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="popular" className="size-4" id="popular" />
                                <Label htmlFor="popular">Most Popular</Label>
                            </div>

                        </RadioGroup>
                    </div>


                    <div className="grid grid-cols-2 justify-between gap-3 fixed bottom-4 w-full left-0 px-3">
                        <Button variant="default" className="w-full">Filter</Button>
                        <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>Close</Button>
                    </div>


                </div>

            </DialogContent>
        </Dialog>
    )
}
