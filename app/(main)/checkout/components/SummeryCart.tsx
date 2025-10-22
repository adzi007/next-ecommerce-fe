"use client"

export default function SummeryCart() {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
    
      <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
        <div className="flex items-start justify-between">
          <h2 id="drawer-title" className="text-lg font-medium text-gray-900">Your Cart</h2>
        </div>

        <div className="mt-6">
          <div className="flow-root">
            <ul role="list" className="-my-6">
                <li className="flex py-4">
                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="size-full object-cover" />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">Throwback Hip Bag</a>
                        </h3>
                        <p className="ml-4">$90.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                    </div>
                    </div>

                </li>
              <li className="flex py-4">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="size-full object-cover" />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Medium Stuff Satchel</a>
                      </h3>
                      <p className="ml-4">$32.00</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Blue</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                  </div>
                </div>
              </li>
              <li className="flex py-4">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." className="size-full object-cover" />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Zip Tote Basket</a>
                      </h3>
                      <p className="ml-4">$140.00</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">White and black</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">Checkout</a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            Or
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 ms-2">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
