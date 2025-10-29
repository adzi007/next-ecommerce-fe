"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon, X } from "lucide-react"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function ModalSearch() {

    const [open, setOpen] = useState(false)

    const [query, setQuery] = useState("")

    // Dummy search data (you can replace with API results)
    const items = [
        "iPhone 15 Pro Max",
        "Samsung Galaxy S24 Ultra",
        "Sony WH-1000XM5",
        "Apple Watch Ultra 2",
        "MacBook Air M3",
        "Logitech MX Master 3S",
        "Dell XPS 13",
    ]

    // Filtered results
    const results = items.filter(item => item.toLowerCase().includes(query.toLowerCase()))

    return (
         <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger className="lg:hidden block p-0! m-0">
                <FiSearch className="size-6" />
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="fixed p-0 h-screen w-full max-w-full flex flex-col bg-white rounded-none">
                <DialogHeader className="border-b py-2 flex-row items-center justify-between px-3">
                    <DialogTitle className="hidden">Search</DialogTitle>
                    <InputGroup>
                        <InputGroupInput placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        <X className="w-8 h-8" />
                    </Button>
                </DialogHeader>

                <div className="py-2 px-3 overflow-y-auto" id="search-auto-complete">

                    {query === "" ? (
                        <p className="text-gray-500 text-sm">Start typing to search...</p>

                    ) : results.length > 0 ? (

                        <ul className="divide-y">

                            {results.map((item, index) => (
                                <li
                                key={index}
                                className="py-3 cursor-pointer hover:bg-gray-100 px-2 rounded-md transition"
                                onClick={() => {
                                    console.log(`Selected: ${item}`)
                                    setOpen(false)
                                }}
                                >
                                {item}
                                </li>
                            ))}
                            
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm">No results found.</p>
                    )}

                </div>
            </DialogContent>
        </Dialog>
    )
}
