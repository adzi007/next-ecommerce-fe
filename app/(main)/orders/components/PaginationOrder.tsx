import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import React from 'react'

export default function PaginationOrder() {
  return (
    <div className="w-full">
      <Pagination className="w-full max-w-xs">
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="border bg-white flex items-center gap-1 px-3 py-1"
            >
              {/* Force text to always be visible */}
              <span className="inline text-sm font-medium sm:block">Previous</span>
            </PaginationPrevious>
          </PaginationItem>

          <PaginationItem>
            <span className="text-sm text-muted-foreground">Page 1 of 21</span>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              className="border bg-white flex items-center gap-1 px-3 py-1"
            >
              <span className="inline text-sm font-medium">Next</span>
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>
  )
}
