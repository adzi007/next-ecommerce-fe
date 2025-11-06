'use client'

import Autocomplete from '@/components/ui/autocomplete'
import { getAutocompleteSuggestions } from '../services/autocomplete.service'
// import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductSearchAutocomplete() {

    // const router = useRouter()

    const [keywordsTyped, setLeywordsTyped] = useState("")

    const handleSelect = (value: string) => {

        console.log("value selected >>>> ", value);
        
        // router.push(`/products?search=${encodeURIComponent(value)}`)
    }

    useEffect(() => {

        console.log("keywordsTyped >>> ", keywordsTyped);
        
    }, [keywordsTyped])
    

    return (
        <Autocomplete
            fetcher={getAutocompleteSuggestions}
            onSelect={handleSelect}
            onChange={setLeywordsTyped}
        />
    )
}
