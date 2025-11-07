'use client'

import Autocomplete from '@/components/ui/autocomplete'
import { getAutocompleteSuggestions } from '../services/autocomplete.service'
// import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useProductFilterStore } from '../store/productFilter.store';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductSearchAutocomplete() {

    // const { filterProduct } = useProductFilterStore();
    const router        = useRouter();
    const searchParams  = useSearchParams();

    // const router = useRouter()

    const [keywordsTyped, setLeywordsTyped] = useState("")

    const handleSubmitSearch = () => {

        const params = new URLSearchParams(searchParams.toString());

        params.set("search", keywordsTyped);

        router.push(`?${params.toString()}`);

        // console.log("============ do submit search ===============");
        // console.log("final keyword: ", keywordsTyped);
                
    }
    

    return (
        <Autocomplete
            fetcher={getAutocompleteSuggestions}
            // onSelect={handleSelect}
            onChange={setLeywordsTyped}
            onSubmit={handleSubmitSearch}
        />
    )
}
