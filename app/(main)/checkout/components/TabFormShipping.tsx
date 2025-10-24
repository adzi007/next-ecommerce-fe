"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDownIcon, ChevronsUpDown, MailIcon } from "lucide-react"
import { checkoutSchema, CheckoutSchema } from "@/schemas/checkoutSchema"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const countries = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Indonesia", value: "id" },
]

export default function TabFormShipping({ setActiveTabs }: { setActiveTabs: (tab: number) => void }) {
    const [open, setOpen] = useState(false)
    // const [value, setValue] = useState("")

    
    const [countryOpen, setCountryOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("")

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<CheckoutSchema>({
        resolver: zodResolver(checkoutSchema),
    })

    const onSubmit = (data: CheckoutSchema) => {
        console.log("Form Data:", data)
        // setActiveTabs(2)
    }

  const deliveryMethod = watch("deliveryMethod")

    return (              
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <h1 className="text-xl font-semibold mb-5">Delivery Detail</h1>

            {/* --- Basic Info --- */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium">First Name</label>
                    <Input {...register("firstName")} className="py-5 px-3" />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium">Last Name</label>
                    <Input {...register("lastName")} className="py-5 px-3" />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Email</label>
                    <InputGroup className="h-11">
                        <InputGroupInput type="email" {...register("email")} placeholder="example@email.com" />
                        <InputGroupAddon>
                        <MailIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Phone Number</label>
                    <InputGroup className="h-11">
                        <InputGroupInput type="tel" {...register("phone")} placeholder="8123456789" />
                        <InputGroupAddon>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
                                <img src="/icons/countries/indonesia.svg" alt="" className="size-6" /> +62{" "}
                                <ChevronDownIcon className="size-3" />
                            </InputGroupButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
                            {countries.map((c) => (
                                <DropdownMenuItem key={c.value}>{c.label}</DropdownMenuItem>
                            ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
            </div>

            {/* --- Address --- */}
            <div>
                <label className="block mb-2 text-sm font-medium">Address</label>
                <Input {...register("address")} className="py-5 px-3" />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            {/* --- Country, City, Zip --- */}
            <div className="grid gap-3 md:grid-cols-3 mt-7">
                <div>
                    <label className="block mb-2 text-sm font-medium">Country</label>
                    <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                        <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" className="w-full h-11 justify-between">
                            {selectedCountry
                            ? countries.find((c) => c.value === selectedCountry)?.label
                            : "Select country..."}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search country..." className="h-9" />
                            <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {countries.map((c) => (
                                <CommandItem
                                    key={c.value}
                                    onSelect={() => {
                                    setSelectedCountry(c.value)
                                    setValue("country", c.label)
                                    setCountryOpen(false)
                                    }}
                                >
                                    {c.label}
                                </CommandItem>
                                ))}
                            </CommandGroup>
                            </CommandList>
                        </Command>
                        </PopoverContent>
                    </Popover>
                    {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">City</label>
                    <Input {...register("city")} className="py-5 px-3" />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Zip Code</label>
                    <Input {...register("zipCode")} className="py-5 px-3" />
                    {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
                </div>
            </div>

            {/* --- Delivery Methods --- */}
            <h1 className="text-lg font-semibold mt-8 mb-5">Delivery Methods</h1>

            <div className="grid gap-4 md:grid-cols-3">
                {[
                    { id: "dhl", label: "$15 - DHL Fast Delivery", desc: "Get it by Tomorrow" },
                    { id: "fedex", label: "Free Delivery - FedEx", desc: "Get it by Friday" },
                    { id: "express", label: "$49 - Express Delivery", desc: "Get it today" },
                ].map((opt) => (

                    <label
                        key={opt.id}
                        className={`rounded-lg border p-4 cursor-pointer ${
                        deliveryMethod === opt.id ? "border-primary bg-gray-100" : "border-gray-200"
                        }`}
                    >
                        <div className="flex items-start">
                        <input
                            type="radio"
                            value={opt.id}
                            {...register("deliveryMethod")}
                            className="h-4 w-4 text-primary focus:ring-2"
                        />
                        <div className="ml-3">
                            <p className="font-medium">{opt.label}</p>
                            <p className="text-xs text-gray-500">{opt.desc}</p>
                        </div>
                        </div>
                    </label>
                ))}

            </div>

            {errors.deliveryMethod && (
                <p className="text-red-500 text-sm">{errors.deliveryMethod.message}</p>
            )}

            {/* --- Submit Button --- */}
            <Button type="submit" className="text-white mt-6 bg-gray-800 hover:bg-gray-900 hover:cursor-pointer font-medium rounded-md w-full">
                Continue To Payment
            </Button>
        </form>        
    )
}
