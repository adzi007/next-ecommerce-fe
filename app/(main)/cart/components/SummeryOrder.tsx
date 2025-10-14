"use client"

export const SummeryOrder = () => {
    
  return (
    <div className="space-y-4">
        <div className="space-y-2">

            <dl className="flex items-center justify-between gap-4">
                <dt>Original price</dt>
                <dd>Rp. 320.000</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">

                <dt>Discount</dt>
                <dd>Rp. 0</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
                <dt>Tax</dt>
                <dd>Rp 22.500.</dd>
            </dl>

        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
        </dl>
    </div>
  )
}
