"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDownIcon, ChevronsUpDown, MailIcon } from "lucide-react"
import { checkoutSchema, CheckoutSchema } from "@/schemas/checkoutSchema"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import { shippingOptionsDummy, countriesDummy } from "@/data/shipping"
import { getCountries, getCountriesCode, getShippingOptions } from "../data/shipping"

const countries = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Indonesia", value: "id" },
]

interface CountryOption {
    label: string;
    value: string;
}

interface ShippingOption {
    id: string;
    label: string;
    desc: string;
}

interface PhoneCountryCode {
    label: string;
    value: string;
}

export default function TabFormShipping({ setActiveTabs }: { setActiveTabs: (tab: number) => void }) {

    // const [open, setOpen] = useState(false)
    
    const [countryOpen, setCountryOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("")

    const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
    const [countryOptions, setCountryOptions] = useState<CountryOption[]>([])

    const [phoneCountryCode, setphoneCountryCode] = useState<PhoneCountryCode[]>([])

    const [selectedCountryCode, setSelectedCountryCode] = useState<PhoneCountryCode>({
        label:"Indonesia", value:"+62"
    })

    useEffect(() => {

        (async () => {
            const [ships, countries, coubtriesCode] = await Promise.all([getShippingOptions(), getCountries(), getCountriesCode()]);
            setShippingOptions(ships as ShippingOption[]);
            setCountryOptions(countries as CountryOption[] );
            setphoneCountryCode(coubtriesCode as PhoneCountryCode[] )
        })();
     
    }, [])
    

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CheckoutSchema>({
        resolver: zodResolver(checkoutSchema),
    })

    const onSubmit = (data: CheckoutSchema) => {
        console.log("Form Data:", data)
        setActiveTabs(2)
    }

  const deliveryMethod = watch("deliveryMethod")

    return (              
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <h1 className="text-xl font-semibold mb-5">Delivery Detail</h1>

            {/* --- Basic Info --- */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium">First Name</label>
                    <Input {...register("firstName")} className={`py-5 px-3 ${ errors.firstName && 'border-red-500' }`}  />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium">Last Name</label>
                    <Input {...register("lastName")} className={`py-5 px-3 ${ errors.lastName && 'border-red-500' }`} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Email</label>
                    <InputGroup className={`h-11 py-5 px-3 ${ errors.email && 'border-red-500' }`}>
                        <InputGroupInput type="email" {...register("email")} placeholder="example@email.com" />
                        <InputGroupAddon>
                        <MailIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Phone Number</label>
                    <InputGroup className={`h-11 py-5 px-3 ${ errors.email && 'border-red-500' }`}>
                        <InputGroupInput type="tel" {...register("phone")} placeholder="8123456789" />
                        <InputGroupAddon>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <InputGroupButton variant="ghost" className="!pr-1.5 text-sm">
                                { selectedCountryCode.value + " "}
                                <ChevronDownIcon className="size-3" />
                            </InputGroupButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
                                {phoneCountryCode.map((c) => (
                                    <DropdownMenuItem key={c.value} onSelect={ () => setSelectedCountryCode(c)}>
                                        {c.label + ' ('+c.value+')'}
                                    </DropdownMenuItem>
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
                <Input {...register("address")} className={`py-5 px-3 ${ errors.email && 'border-red-500' }`} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            {/* --- Country, City, Zip --- */}
            <div className="grid gap-3 md:grid-cols-3 mt-7">
                <div>
                    <label className="block mb-2 text-sm font-medium">Country</label>
                    <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                        <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" className={`w-full h-11 justify-between ${ errors.country && 'border-red-500' }`}>
                            { selectedCountry
                                ? countryOptions.find((c) => c.value === selectedCountry)?.label
                                : "Select country..."
                            }
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search country..." className="h-9" />
                                <CommandList>
                                    <CommandEmpty>No country found.</CommandEmpty>
                                    <CommandGroup>
                                        {countryOptions.map((c) => (
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
                    <Input {...register("city")} className={`py-5 px-3 ${ errors.city && 'border-red-500'}`} />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Zip Code</label>
                    <Input {...register("zipCode")} className={`py-5 px-3 ${ errors.zipCode && 'border-red-500'}`} />
                    {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
                </div>
            </div>

            {/* --- Delivery Methods --- */}
            <h1 className="text-lg font-semibold mt-8 mb-5">Delivery Methods</h1>

            <div className="grid gap-4 md:grid-cols-3">

                {shippingOptions.map((opt) => (

                    <label
                        key={opt.id}
                        className={`rounded-lg border p-4 cursor-pointer ${
                        deliveryMethod === opt.id ? "border-blue-600" : "border-gray-200"
                        } ${errors.deliveryMethod && 'border-red-500'}`}
                    >
                        <div className="flex items-start">
                        <input
                            type="radio"
                            value={opt.id}
                            {...register("deliveryMethod")}
                            className="h-4 w-4 text-primary"
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
