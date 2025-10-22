"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6";

import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
  PhoneIcon,
  Smartphone,
  ChevronDownIcon
} from "lucide-react"


import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function FormCheckout() {
    const [activeTabs, setactiveTabs] = useState("account")
    
    return (
    <>

        <div className="mb-2">
            <ul className="flex text-sm font-medium text-center justify-between" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className="inline-flex items-center gap-2 py-4 ps-0 pe-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        <FaCircleCheck className="size-5" />
                        <span className="w-max text-md">Shipping Information</span>
                    </button>
                </li>
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        <FaRegCircleCheck className="size-5" />
                        <span className="w-max text-md">Chekout</span>
                    </button>
                </li>
                <li className="flex items-center justify-end" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" type="button" role="tab" aria-selected="false">
                         <FaRegCircleCheck className="size-5" />
                        <span className="w-max text-md">Order Summery</span>
                    </button>
                </li>
            </ul>
        </div>

        <Card className="w-full rounded-md">

            <CardContent>
                <div id="default-tab-content" className="mt-3">
                    <div className="rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 

                        <form>
                            <h1 className="text-lg font-semibold mb-5">Delivery Detail</h1>

                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <Input type="text" placeholder="" className="py-5 px-3" />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <Input type="email" placeholder="" className="py-5 px-3" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <InputGroup className="h-11">
                                        <InputGroupInput type="email" placeholder="" />
                                        <InputGroupAddon>
                                            <MailIcon />
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>

                                    <InputGroup className="h-11">
                                        <InputGroupInput type="number" placeholder="" />
                                        <InputGroupAddon>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
                                                        🇮🇩 +62  <ChevronDownIcon className="size-3" />
                                                    </InputGroupButton>
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent align="end" className="[--radius:0.95rem]">
                                                    <DropdownMenuItem>🇺🇸 United States (+1)</DropdownMenuItem>
                                                    <DropdownMenuItem>🇬🇧 United Kingdom (+44)</DropdownMenuItem>
                                                    <DropdownMenuItem>🇦🇺 Australia (+61)</DropdownMenuItem>
                                                    <DropdownMenuItem>🇩🇪 Germany (+49)</DropdownMenuItem>
                                                    <DropdownMenuItem>🇫🇷 Freance (+33)</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>

                            </div>

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <Input type="text" placeholder="" className="py-5 px-3" />
                            </div>

                            <div className="grid gap-3 mb-6 md:grid-cols-3 mt-7">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                    <Select>
                                        <SelectTrigger className="w-full h-11!">
                                            <SelectValue placeholder="Select a country"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <Select>
                                        <SelectTrigger className="w-full h-11!">
                                            <SelectValue placeholder="Select a city"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
                                    <InputGroup className="h-11">
                                        <InputGroupInput type="email" placeholder="" />
                                        <InputGroupAddon>
                                            <MailIcon />
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </div>

                            <h1 className="text-lg font-semibold mt-8 mb-5">Delivery Methods</h1>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                    <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                                    </div>

                                    <div className="ms-4 text-sm">
                                    <label htmlFor="dhl" className="font-medium leading-none text-gray-900 dark:text-white"> $15 - DHL Fast Delivery </label>
                                    <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Tommorow</p>
                                    </div>
                                </div>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                    <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                    </div>

                                    <div className="ms-4 text-sm">
                                    <label htmlFor="fedex" className="font-medium leading-none text-gray-900 dark:text-white"> Free Delivery - FedEx </label>
                                    <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Friday, 13 Dec 2023</p>
                                    </div>
                                </div>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                    <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                    </div>

                                    <div className="ms-4 text-sm">
                                    <label htmlFor="express" className="font-medium leading-none text-gray-900 dark:text-white"> $49 - Express Delivery </label>
                                    <p id="express-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it today</p>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <button type="submit" className="text-white mt-6 bg-gray-800 hover:bg-gray-900 font-medium rounded-md w-full hover:cursor-pointer px-5 py-2.5 text-center">Continue To Payment</button>
                        

                        </form>


                    </div>
                    <div className="hidden rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. 
                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps claxsses to control the content visibility and styling.
                        </p>
                    </div>
                    <div className="hidden rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. 
                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps claxsses to control the content visibility and styling.
                        </p>
                    </div>

                </div>
            </CardContent>
        </Card>

        

    </>
  )
}
