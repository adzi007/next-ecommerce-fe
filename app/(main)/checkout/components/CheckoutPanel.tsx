"use client"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
// import TabFormPayment from "./TabFormPayment";
import { Button } from "@/components/ui/button";
// import TabFormShipping from "./TabFormShipping";
import AddressCard from "./shared/AddressCard";
import StepHeader from "./shared/StepHeader";
import { useTabStepStore } from "../store/tabs.store";
import ShippingStep from "./steps/ShippingStep";
import PaymentStep from "./steps/PaymentStep";
import CompleteStep from "./steps/CompleteStep";

export default function CheckoutPanel() {

    const activeTabs = useTabStepStore((state) => state.tabData?.activeTab)

    // const setActiveTabs = (step: number) => {
    //     useTabStepStore.getState().setActiveTab(step)
    // }
    
    return (
        <>
            <StepHeader />

            { activeTabs == 2 && <AddressCard /> }

            <Card className="w-full rounded-md">

                <CardContent>

                    <div id="default-tab-content" className="mt-3">
                        <div className={ (activeTabs == 1 ? "d-block ":"hidden " ) + "rounded-lg"} id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                            <ShippingStep  />
                        </div>
                        <div className={ (activeTabs == 2 ? "d-block ":"hidden " ) + "rounded-lg"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <PaymentStep />

                        </div>
                        <div className={ (activeTabs == 3 ? "d-block ":"hidden " ) + "rounded-lg"} id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <CompleteStep />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
  )
}
