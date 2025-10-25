"use client"
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MailIcon, ChevronDownIcon, ChevronsUpDown, Check } from "lucide-react"
import { FiEdit } from "react-icons/fi";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import TabFormPayment from "./TabFormPayment";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import TabFormShipping from "./TabFormShipping";

const countries = [
  {
    label: "United State",
    value: "US",
  },
  {
    label: "United Kingdom",
    value: "UK",
  },
  {
    label: "France",
    value: "FR",
  },
  {
    label: "German",
    value: "german",
  },
  {
    label: "Australia",
    value: "AUS",
  },
]


export default function FormCheckout() {

    const [activeTabs, setactiveTabs] = useState(1) //shipping, payment, order_summery
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    
    return (
    <>

        <div className="mb-2">
            <ul className="flex text-sm font-medium text-center justify-between" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className="inline-flex items-center gap-2 py-4 ps-0 pe-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        { activeTabs >= 1 ? <FaCircleCheck className="size-5" />:<FaRegCircleCheck className="size-5" /> } 
                        <span className="w-max text-md">Shipping Information</span>
                    </button>
                </li>
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        {/* <FaRegCircleCheck className="size-5" /> */}
                        {/* <FaCircleCheck className="size-5" /> */}
                        { activeTabs >= 2 ? <FaCircleCheck className="size-5" />:<FaRegCircleCheck className="size-5" /> } 
                        <span className="w-max text-md">Payment</span>
                    </button>
                </li>
                <li className="flex items-center justify-end" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" type="button" role="tab" aria-selected="false">
                         { activeTabs >= 3 ? <FaCircleCheck className="size-5" />:<FaRegCircleCheck className="size-5" /> } 
                        <span className="w-max text-md">Order Complete</span>
                    </button>
                </li>
            </ul>
        </div>

        { activeTabs == 2 &&
        
        <Card className="w-full rounded-md mb-4 py-4">

            <CardContent>
                <h1 className="text-lg font-semibold mb-2">Shipping Address</h1>
                <div className="flex items-center justify-between">
                    <p className="text-gray-500">98 kile Close Sydney, Australia 2723</p>
                    <Button type="button" variant={"link"} onClick={() => setactiveTabs(1)} className="text-blue-600 hover:cursor-pointer" ><FiEdit /> Edit Address</Button>
                </div>
            </CardContent>
        </Card>
        
        }

        <Card className="w-full rounded-md">

            <CardContent>
                <div id="default-tab-content" className="mt-3">

                    <div className={ (activeTabs == 1 ? "d-block ":"hidden " ) + "rounded-lg"} id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                        <TabFormShipping setActiveTabs={setactiveTabs} />
                    </div>

                    <div className={ (activeTabs == 2 ? "d-block ":"hidden " ) + "rounded-lg"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        
                        <TabFormPayment />
                        
                        <div className="flex w-full mt-6 justify-between">

                            <Button 
                                type="button" 
                                variant={"ghost"}
                                onClick={() => setactiveTabs(1)}
                                className="border h-11 hover:cursor-pointer rounded-sm">
                                   <MdOutlineKeyboardBackspace className="size-6" /> Back To Shipping
                            </Button>

                            <Button 
                                type="button" 
                                variant={"default"}
                                onClick={() => setactiveTabs(3)}
                                className="h-11 hover:cursor-pointer rounded-sm">
                                    Confirm Payment $570.68
                            </Button>

                        </div>

                    </div>

                    <div className={ (activeTabs == 3 ? "d-block ":"hidden " ) + "rounded-lg"} id="settings" role="tabpanel" aria-labelledby="settings-tab">
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
