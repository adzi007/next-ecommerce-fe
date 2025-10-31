import React from 'react'

export default function ProductDescription({
  description,
  additionalInfo,
}: {
  description: string
  additionalInfo: string
}) {
  return (
    <>
   <div className="mt-3 border-t pt-5 text-gray-500 space-y-3">
      <p>{description}</p>
      <p>{additionalInfo}</p>
    </div>
    </>
  )
}
