"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hourglass, Truck, Check, X } from "lucide-react"
import PaginationOrder from "./PaginationOrder"
import Link from "next/link"

const orders = [
  {
    id: "FWB127364372",
    date: "20.12.2023",
    price: "$4,756",
    status: "Pre-order",
    color: "primary",
    icon: Hourglass,
  },
  {
    id: "FWB125467980",
    date: "11.12.2023",
    price: "$499",
    status: "In transit",
    color: "yellow",
    icon: Truck,
  },
  {
    id: "FWB139485607",
    date: "08.12.2023",
    price: "$85",
    status: "Confirmed",
    color: "green",
    icon: Check,
  },
  {
    id: "FWB146284623",
    date: "26.09.2023",
    price: "$180",
    status: "Cancelled",
    color: "red",
    icon: X,
  },
]

export default function OrderList() {
  return (
    <div className="flex flex-col gap-10 mb-8 w-full">
      <section className="bg-white py-4 px-4 md:py-10 border rounded-md shadow-sm">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">My Orders</h2>

            <div className="flex flex-wrap gap-4 items-center">
              <Select defaultValue="all">
                <SelectTrigger className="min-w-[8rem]">
                  <SelectValue placeholder="Order Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="pre-order">Pre-order</SelectItem>
                  <SelectItem value="transit">In Transit</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>

              <span className="text-gray-500">from</span>

              <Select defaultValue="this-week">
                <SelectTrigger className="min-w-[8rem]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This week</SelectItem>
                  <SelectItem value="this-month">This month</SelectItem>
                  <SelectItem value="3-months">Last 3 months</SelectItem>
                  <SelectItem value="6-months">Last 6 months</SelectItem>
                  <SelectItem value="this-year">This year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-6 divide-y divide-gray-300">
            {orders.map((order) => {
              const Icon = order.icon
              return (
                <Card key={order.id} className="border-x-0 border-t-0 last:border-b-0 rounded-none shadow-none pt-4">
                  <CardContent className="flex flex-wrap lg:items-end items-center gap-y-4 px-2">
                    <OrderDetail label="Order ID" value={<Link href={"/orders/" + order.id} className="hover:underline">{order.id}</Link>} />
                    <OrderDetail label="Date" value={order.date} />
                    <OrderDetail label="Price" value={order.price} />
                    <OrderDetail
                      label="Status"
                      value={
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 text-xs capitalize ${
                            order.color === "primary"
                              ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                              : order.color === "yellow"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : order.color === "green"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          <Icon className="size-3" />
                          {order.status}
                        </Badge>
                      }
                    />

                    <div className="w-full grid grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-3">
                      {order.status === "Cancelled" || order.status === "Confirmed" ? (
                        <Button variant="default" size="sm" className="lg:w-auto hover:cursor-pointer">
                          Order Again
                        </Button>
                      ) : (
                        <Button variant="destructive" size="sm" className="lg:w-auto hover:cursor-pointer">
                          Cancel Order
                        </Button>
                      )}
                      <Link href={"/orders/" + order.id}>
                        <Button variant="outline" size="sm" className="lg:w-auto hover:cursor-pointer">
                          View Details
                        </Button>
                      </Link>
                     
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Separator />
      <PaginationOrder />
    </div>
  )
}

function OrderDetail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1 lg:not-last:me-3">
      <dt className="text-sm font-medium text-gray-500">{label}:</dt>
      <dd className="mt-1.5 text-base text-gray-900">{value}</dd>
    </dl>
  )
}
