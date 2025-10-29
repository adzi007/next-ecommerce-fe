"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon, X } from "lucide-react"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function ModalSearch() {

    const [open, setOpen] = useState(false)

    return (
         <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger className="lg:hidden block p-0! m-0">
                <FiSearch className="size-6" />
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="fixed p-0 h-screen w-full max-w-full flex flex-col bg-white rounded-none">
                <DialogHeader className="border-b py-2 flex-row items-center justify-between px-3">
                    <InputGroup>
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        <X className="w-8 h-8" />
                    </Button>
                </DialogHeader>

                <div className="py-2 px-3 overflow-y-auto">


                </div>
            </DialogContent>
        </Dialog>
    )
}
