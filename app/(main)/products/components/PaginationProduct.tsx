"use client"

import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { usePaginationProductStore } from "../store/productPagination.store"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";


export default function PaginationProduct() {

  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = Number(pageParam) || 1;

  const { pagination } = usePaginationProductStore()
  const [totalPage, setTotalPage] = useState(0)

  const nextParams = new URLSearchParams(searchParams.toString());
  const prevParams = new URLSearchParams(searchParams.toString());

  const [nextParamString, setNextParamString] = useState("")
  const [prevParamString, setPrevParamString] = useState("")

  useEffect(() => {
    
    if(pagination){      
      const totalPage = Math.ceil( pagination.total / pagination.limit )
      setTotalPage(totalPage)      

      nextParams.set("page", String(page + 1))
      setNextParamString(nextParams.toString())

      prevParams.set("page", String(page - 1))

      setPrevParamString(prevParams.toString())      

    }

  }, [pagination])
  

  return (
    <div className="w-full">
      <Pagination className="w-full max-w-xs">
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
             aria-disabled={page == 1}
              href={ page > 1 ? `/products?${prevParamString}`:undefined }
              className={`border bg-white flex items-center gap-1 px-3 py-1  ${ page == 1 && 'hover:cursor-not-allowed'  }`}
            >
              {/* Force text to always be visible */}
              <span className="inline text-sm font-medium sm:block">Previous</span>
            </PaginationPrevious>
          </PaginationItem>

          <PaginationItem>
            <span className="text-sm text-muted-foreground">Page { page } of { totalPage }</span>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              aria-disabled={page >= totalPage}
              href={ page < totalPage ? `/products?${nextParamString}`:undefined }
              className={`border bg-white flex items-center gap-1 px-3 py-1 ${ page >= totalPage && 'hover:cursor-not-allowed'  } `}
            >
              <span className="inline text-sm font-medium">Next</span>
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
