"use client"

import { useState } from "react"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"

interface PhoneCountryCode {
  label: string
  value: string
}

interface PhoneInputProps {
  value: string
  onChange: (phone: string) => void
  error?: string
  countryCodes?: PhoneCountryCode[]
  defaultCountry?: PhoneCountryCode
}

export function PhoneInput({
  value,
  onChange,
  error,
  countryCodes = [],
  defaultCountry = { label: "Indonesia", value: "+62" },
}: PhoneInputProps) {
  const [selectedCode, setSelectedCode] = useState<PhoneCountryCode>(defaultCountry)

  return (
    <div>
      <InputGroup className={`h-11 py-5 px-3 ${error ? "border-red-500" : ""}`}>
        <InputGroupInput
          type="tel"
          placeholder="8123456789"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <InputGroupAddon>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" className="!pr-1.5 text-sm">
                {selectedCode.value} <ChevronDownIcon className="size-3 ml-1" />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
              {countryCodes.map((c) => (
                <DropdownMenuItem key={c.value} onSelect={() => setSelectedCode(c)}>
                  {c.label} ({c.value})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}
