import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbProps {
    category: {
        name: string;
        slug: string;
    }
    name: string
}

export function ProductBreadcrumb({ category, name }: BreadcrumbProps) {
  return (
    <Breadcrumb className="lg:mb-6 mb-3 lg:px-0 px-4">
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products" className="lg:text-lg text-base line-clamp-1">Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/products/category/${category.slug}`} className="lg:text-lg text-base line-clamp-1">{category.name}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="lg:text-lg text-base line-clamp-1">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
