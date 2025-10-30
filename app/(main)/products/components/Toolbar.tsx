import React from 'react'
import ModalFilter from './ModalFilter'
import { Separator } from '@/components/ui/separator'

export default function Toolbar() {
  return (
    <div className="w-full mb-4">
        <div className="space-y-1 flex items-center justify-between">
            <h4 className="text-lg leading-none font-medium">All Products</h4>
            <ModalFilter />
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
            <p>Showing 10 - 125 from total of all products</p>
        </div>
    </div>
  )
}
