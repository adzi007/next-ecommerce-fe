"use client"

import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6"
import { useTabStepStore } from "../../store/tabs.store"

export default function StepHeader() {

    const activeTabs = useTabStepStore((state) => state.tabData?.activeTab)

    return (
        <div className="mb-2">
            <ul className="flex text-sm font-medium text-center justify-between" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className="inline-flex items-center gap-2 py-4 ps-0 pe-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        { activeTabs && activeTabs >= 1 ? <FaCircleCheck className="size-5" />:<FaRegCircleCheck className="size-5" /> } 
                        <span className="w-max text-md">Shipping Information</span>
                    </button>
                </li>
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg" id="profile-tab" type="button" role="tab">
                        { activeTabs && activeTabs >= 2 ? <FaCircleCheck className="size-5" />:<FaRegCircleCheck className="size-5" /> } 
                        <span className="w-max text-md">Payment</span>
                    </button>
                </li>
                <li className="flex items-center justify-end" role="presentation">
                    <button className="inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" type="button" role="tab" aria-selected="false">
                            { activeTabs && activeTabs >= 3 ? <FaCircleCheck className="size-5" />:<FaRegCircleCheck className="size-5" /> } 
                        <span className="w-max text-md">Order Complete</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
