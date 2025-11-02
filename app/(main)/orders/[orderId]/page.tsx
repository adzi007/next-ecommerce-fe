import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Printer } from "lucide-react";
import Link from "next/link";


export default async function Page({ params }: { params: Promise<{ orderId: string }>}) {

    const { orderId } = await params

    return (
        <div className="lg:w-3/5 w-full mx-auto lg:px-4 px-0 lg:py-8 py-4">

            <div className="flex w-full justify-between mb-4">
                <Link href="/orders"><Button variant="outline"><ChevronLeft /></Button></Link>
                
                <Button variant="outline"><Printer/> Print</Button>

            </div>
            <Card className="w-full rounded-md">
                <CardContent>
                    <div className="mx-auto">
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Order ORD-12345</h2>

                        <div className="mt-4 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                            <h4 className="text-lg font-semibold text-gray-900">Billing & Delivery information</h4>

                            <dl>
                            <dt className="text-base font-medium text-gray-900">Individual</dt>
                            <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">Bonnie Green - +1 234 567 890, San Francisco, California, United States, 3454, Scott Street</dd>
                            </dl>

                            {/* <button type="button" data-modal-target="billingInformationModal" data-modal-toggle="billingInformationModal" className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button> */}
                        </div>

                        <div className="mt-4 space-y-6">
                                <h4 className="text-xl font-semibold text-gray-900">Order summary</h4>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900">$6,592.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-500">-$299.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                            <dd className="text-base font-medium text-gray-900">$99</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900">$799</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-lg font-bold text-gray-900">Total</dt>
                                    <dd className="text-lg font-bold text-gray-900">$7,191.00</dd>
                                    </dl>
                                </div>
                            </div>

                        <div className="mt-6 py-8">
                            <h4 className="text-xl font-semibold text-gray-900">Order Items</h4>
                            <div className="relative overflow-x-auto border-b mt-8 border-gray-200 dark:border-gray-800">
                                <table className="w-full text-left font-medium text-gray-900 md:table-fixed">
                                    <thead className="text-sm border-b">
                                        <th className="font-medium py-4">Product</th>
                                        <th className="font-medium py-4">Price</th>
                                        <th className="font-medium py-4">qty</th>
                                        <th className="font-medium py-4">Total</th>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                            <div className="flex items-center gap-4">
                                                <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                                                <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                                </a>
                                                <a href="#" className="hover:underline">Apple iMac 27”</a>
                                            </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">1</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$1,499</td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                            <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                                            <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                                            </a>
                                            <a href="#" className="hover:underline">Apple iPhone 14</a>
                                        </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">2</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$1,998</td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                            <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="ipad image" />
                                            <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="ipad image" />
                                            </a>
                                            <a href="#" className="hover:underline">Apple iPad Air</a>
                                        </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">1</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$898</td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                            <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="xbox image" />
                                            <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="xbox image" />
                                            </a>
                                            <a href="#" className="hover:underline">Xbox Series X</a>
                                        </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">4</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$4,499</td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                            <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="playstation image" />
                                            <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="playstation image" />
                                            </a>
                                            <a href="#" className="hover:underline">PlayStation 5</a>
                                        </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">1</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$499</td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                            <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="macbook image" />
                                            <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="macbook image" />
                                            </a>
                                            <a href="#" className="hover:underline">MacBook Pro 16"</a>
                                        </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">1</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$499</td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                            <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="watch image" />
                                            <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="watch image" />
                                            </a>
                                            <a href="#" className="hover:underline">Apple Watch SE</a>
                                        </div>
                                        </td>
                                        <td className="p-4 text-base">$203.89</td>
                                        <td className="p-4 text-base font-normal text-gray-900">2</td>

                                        <td className="p-4 text-right text-base font-bold text-gray-900">$799</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            
                        </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    )
}
