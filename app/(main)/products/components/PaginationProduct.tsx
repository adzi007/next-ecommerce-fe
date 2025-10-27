"use client"

import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"



export default function PaginationProduct() {
  return (
    <div className="w-full">
      <Pagination className="w-full max-w-xs">
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious href="#" className="border" />
          </PaginationItem>
          <PaginationItem>
            <span className="text-sm text-muted-foreground">Page 1 of 21</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="border" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
