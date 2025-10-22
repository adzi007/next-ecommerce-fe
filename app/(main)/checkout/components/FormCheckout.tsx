"use client"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6";


export default function FormCheckout() {
    const [activeTabs, setactiveTabs] = useState("account")
    
    return (
    <>

        <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-between" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2 border-b-4 border-cyan-600" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        <FaCircleCheck className="size-5" />
                        <span>Shipping Information</span>
                    </button>
                </li>
                <li className="me-2" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="dashboard-tab" type="button" role="tab" aria-selected="false">
                        <FaRegCircleCheck className="size-5" />
                        <span>Checkout</span>
                    </button>
                </li>
                <li className="me-2" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" type="button" role="tab" aria-selected="false">
                         <FaRegCircleCheck className="size-5" />
                        <span>Order Summery</span>
                    </button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. 
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps claxsses to control the content visibility and styling.
                </p>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. 
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps claxsses to control the content visibility and styling.
                </p>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. 
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps claxsses to control the content visibility and styling.
                </p>
            </div>

        </div>



        <Tabs defaultValue={activeTabs} className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <Button variant={"default"} onClick={() => setactiveTabs("password")}>Next</Button>
    </>
  )
}
