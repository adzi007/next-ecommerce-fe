"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { X } from "lucide-react"

import { useState } from "react"
import { LuFilter } from "react-icons/lu"
import FormFilter from "./FormFilter"

export default function ModalFilter() {

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="lg:hidden block p-2 rounded-sm bg-white border"><LuFilter size={20} /></DialogTrigger>
            <DialogContent showCloseButton={false} className="fixed p-0 h-screen w-full max-w-full flex flex-col bg-white rounded-none">
                <DialogHeader className="border-b py-2 flex-row items-center justify-between px-3">
                    <DialogTitle>Filter</DialogTitle>
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        <X className="w-6 h-6" />
                    </Button>
                </DialogHeader>

                <div className="py-2 px-3 overflow-y-auto">

                    <FormFilter />

                    <div className="grid grid-cols-2 justify-between gap-3 fixed bottom-4 w-full left-0 px-3">
                        <Button variant="default" className="w-full">Filter</Button>
                        <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>Close</Button>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
