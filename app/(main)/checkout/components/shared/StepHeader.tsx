"use client"

import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6"
import { useTabStepStore } from "../../store/tabs.store"
import { useEffect } from "react"

export default function StepHeader() {

    const activeTabs = useTabStepStore((state) => state.tabData?.activeTab)

    useEffect(() => {
    if (activeTabs) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [activeTabs]) // scroll each time it becomes visible

    return (
        <div className="mb-2">
            <ul className="flex text-sm font-medium text-center justify-between" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className={`inline-flex items-center gap-2 py-4 ps-0 lg:pe-4 pe-0 rounded-t-lg ${ (activeTabs && activeTabs >= 1 ? 'text-gray-800':'text-gray-400') }`} id="profile-tab" type="button" role="tab">
                        { activeTabs && activeTabs >= 1 ? <FaCircleCheck className="lg:size-5 size-4" />:<FaRegCircleCheck className="lg:size-5 size-4" /> } 
                        <span className="w-max lg:text-base text-xs">Shipping Information</span>
                    </button>
                </li>
                <li className="w-[-webkit-fill-available] flex items-center after:content-[''] after:ml-1 after:border-b-2 after:border-gray-300 after:w-full" role="presentation">
                    <button className={`inline-flex items-center gap-2 p-4 rounded-t-lg ${ (activeTabs && activeTabs >= 2 ? 'text-gray-800':'text-gray-400') }`} id="profile-tab" type="button" role="tab">
                        { activeTabs && activeTabs >= 2 ? <FaCircleCheck className="lg:size-5 size-4" />:<FaRegCircleCheck className="lg:size-5 size-4" /> } 
                        <span className="w-max lg:text-base text-xs">Payment</span>
                    </button>
                </li>
                <li className="flex items-center justify-end" role="presentation">
                    <button className={`inline-flex items-center gap-2 p-4 rounded-t-lg ${ (activeTabs && activeTabs >= 3 ? 'text-gray-800':'text-gray-400') }`} id="settings-tab" type="button" role="tab" aria-selected="false">
                            { activeTabs && activeTabs >= 3 ? <FaCircleCheck className="lg:size-5 size-4" />:<FaRegCircleCheck className="lg:size-5 size-4" /> } 
                        <span className="w-max lg:text-base text-xs">Order Complete</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
