"use client"

export default function ProductOptions() {
  return (
    <div className="mt-8">
        <p className="font-semibold text-gray-700">Select Option:</p>
        <ul className="grid w-full gap-1 lg:grid-cols-4 grid-cols-3 mt-2">
            <li>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-2 h-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                    <div className="block">
                        <div className="w-full lg:font-semibold fornt-medium">0-50 MB</div>
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-2 h-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                    <div className="block">
                        <div className="w-full lg:font-semibold fornt-medium">500-1000 MB</div>
                    </div>
                </label>
            </li>
        </ul>
    </div>
  )
}
