"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { MailIcon } from "lucide-react"
import { checkoutSchema, CheckoutSchema } from "@/schemas/checkoutSchema"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { getCountries, getCountriesCode, getShippingOptions  } from "../../data/shipping"
import { useShippingFormStore } from "../../store/checkout.store"
import { useTabStepStore } from "../../store/tabs.store"
import { PhoneInput } from "@/components/forms/PhoneInput"
import SelectPopover from "@/components/ui/SelectPopover"


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

export default function ShippingStep() {


    const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
    const [countryOptions, setCountryOptions] = useState<CountryOption[]>([])
    const [phoneCountryCode, setphoneCountryCode] = useState<PhoneCountryCode[]>([])

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
        defaultValues: {
            phone:""
        }
    })

    const deliveryMethod = watch("deliveryMethod")
    const selectedCountry = watch("country");

    const onSubmit = (data: CheckoutSchema) => {

        console.log("Form Data:", data)

        useShippingFormStore.getState().setShippingData(data)

        useTabStepStore.getState().setActiveTab(2)
    }


    return (              
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <h1 className="text-xl font-semibold mb-5">Delivery Detail</h1>

            {/* --- Basic Info --- */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium">First Name <span className="text-red-500">*</span> </label>
                    <Input {...register("firstName")} className={`py-5 px-3 ${ errors.firstName && 'border-red-500' }`}  />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
                    <Input {...register("lastName")} className={`py-5 px-3 ${ errors.lastName && 'border-red-500' }`} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Email <span className="text-red-500">*</span> </label>
                    <InputGroup className={`h-11 py-5 px-3 ${ errors.email && 'border-red-500' }`}>
                        <InputGroupInput type="email" {...register("email")} placeholder="example@email.com" />
                        <InputGroupAddon>
                            <MailIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                    <PhoneInput
                        value={watch("phone")}
                        onChange={(val) => setValue("phone", val)}
                        error={errors.phone?.message}
                        countryCodes={phoneCountryCode}
                    />
                </div>
            </div>

            {/* --- Address --- */}
            <div>
                <label className="block mb-2 text-sm font-medium">Address <span className="text-red-500">*</span></label>
                <Input {...register("address")} className={`py-5 px-3 ${ errors.email && 'border-red-500' }`} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            {/* --- Country, City, Zip --- */}
            <div className="grid gap-3 md:grid-cols-3 mt-7">
                <div>
                    <label className="block mb-2 text-sm font-medium">Country <span className="text-red-500">*</span></label>
                    <SelectPopover
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(val) => setValue("country", val)}
                        error={errors.country?.message}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">City <span className="text-red-500">*</span></label>
                    <Input {...register("city")} className={`py-5 px-3 ${ errors.city && 'border-red-500'}`} />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Zip Code <span className="text-red-500">*</span></label>
                    <Input {...register("zipCode")} className={`py-5 px-3 ${ errors.zipCode && 'border-red-500'}`} />
                    {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
                </div>
            </div>

            {/* --- Delivery Methods --- */}
            <h1 className="text-lg font-semibold mt-8 mb-5">Delivery Methods <span className="text-red-500">*</span></h1>

            <div className="grid gap-4 md:grid-cols-3">
                {shippingOptions.map((opt) => (

                    <label
                        key={opt.id}
                        className={`rounded-lg border p-4 cursor-pointer ${
                        deliveryMethod === opt.id ? "border-blue-600" : "border-gray-200"
                        } ${errors.deliveryMethod && 'border-red-500'}`}
                    >
                        <div className="flex items-start">
                            <input type="radio" value={opt.id} {...register("deliveryMethod")} className="h-4 w-4 text-primary" />
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
