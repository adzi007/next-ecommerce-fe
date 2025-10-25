"use client"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
import TabFormPayment from "./TabFormPayment";
import { Button } from "@/components/ui/button";
import TabFormShipping from "./TabFormShipping";
import AddressCard from "./shared/AddressCard";
import StepHeader from "./shared/StepHeader";
import { useTabStepStore } from "../store/tabs.store";

export default function FormCheckout() {

    const activeTabs = useTabStepStore((state) => state.tabData?.activeTab)

    const setActiveTabs = (step: number) => {
        useTabStepStore.getState().setActiveTab(step)
    }
    
    return (
        <>
            <StepHeader />

            { activeTabs == 2 && <AddressCard /> }

            <Card className="w-full rounded-md">

                <CardContent>

                    <div id="default-tab-content" className="mt-3">
                        <div className={ (activeTabs == 1 ? "d-block ":"hidden " ) + "rounded-lg"} id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                            <TabFormShipping setActiveTabs={setActiveTabs} />
                        </div>
                        <div className={ (activeTabs == 2 ? "d-block ":"hidden " ) + "rounded-lg"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <TabFormPayment />
                            <div className="flex w-full mt-6 justify-between">
                                <Button 
                                    type="button" 
                                    variant={"ghost"}
                                    onClick={() => setActiveTabs(1)}
                                    className="border h-11 hover:cursor-pointer rounded-sm">
                                    <MdOutlineKeyboardBackspace className="size-6" /> Back To Shipping
                                </Button>
                                <Button 
                                    type="button" 
                                    variant={"default"}
                                    onClick={() => setActiveTabs(3)}
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
