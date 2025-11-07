'use client'

import { useState, useCallback, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

// Simulated API call
// const fetchSuggestions = async (query: string): Promise<string[]> => {
//   await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate network delay
//   const allSuggestions = [
//     'React',
//     'Redux',
//     'Next.js',
//     'TypeScript',
//     'JavaScript',
//     'Node.js',
//     'Express',
//     'MongoDB',
//     'PostgreSQL',
//     'GraphQL',
//     'Vue.js',
//     'Angular',
//     'Svelte',
//     'Tailwind CSS',
//     'Sass',
//     'Webpack',
//     'Babel',
//     'ESLint',
//     'Jest',
//     'Cypress',
//   ]
  // return allSuggestions.filter((suggestion) =>
  //   suggestion.toLowerCase().includes(query.toLowerCase()),
  // )
// }

interface AutoCompleteProps {
  value?: string
  onChange?: (value: string) => void
  fetcher: (query: string) => Promise<string[]>   // 👈 added
  onSelect?: (value: string) => void
  onSubmit: () => void
}

export default function Autocomplete({ value = '', onChange, fetcher, onSelect, onSubmit }: AutoCompleteProps) {

  const [query, setQuery] = useState(value)
  const [debouncedQuery] = useDebounce(query, 300)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const fetchSuggestionsCallback = useCallback(async (q: string) => {

    if (q.trim() === '') {
      setSuggestions([])
      return
    }

    setIsLoading(true)

    try {
      const results = await fetcher(q) // 👈 use the passed-in fetcher
      setSuggestions(results)
    } finally {
      setIsLoading(false)
    }


    // const results = await fetchSuggestions(q)
    // setSuggestions(results)
    // setIsLoading(false)


  }, [])

  useEffect(() => {
    if (debouncedQuery && isFocused) {
      if (suggestions.length === 1 && suggestions[0] === debouncedQuery) return
      fetchSuggestionsCallback(debouncedQuery)
    } else {
      setSuggestions([])
    }
  }, [debouncedQuery, fetchSuggestionsCallback, isFocused])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    // console.log("typing...", e.target.value);
    
    const newValue = e.target.value
    setQuery(newValue)
    onChange?.(newValue)
    setSelectedIndex(-1)
    // onSelect?.(e.target.value)

    setIsLoading(true)
    setIsFocused(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      )
    } else if (e.key === 'ArrowUp') {

      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))

    } else if (e.key === 'Enter' && selectedIndex >= 0) {

      // console.log("select by click enter");
      
      setQuery(suggestions[selectedIndex])
      setSuggestions([])
      setSelectedIndex(-1)
      onChange?.(suggestions[selectedIndex])
      onSelect?.(suggestions[selectedIndex])
      setIsFocused(false)

    }else if (e.key === 'Enter' && selectedIndex == -1) {

      // console.log("Submit serch");
      onSubmit()

    } else if (e.key === 'Escape') {
      setSuggestions([])
      setSelectedIndex(-1)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {

    // console.log("suggestion >>>> ", suggestion);
    
    setQuery(suggestion)
    onSelect?.(suggestion)
    onChange?.(suggestion)
    setSuggestions([])
    setSelectedIndex(-1)
    setIsFocused(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Delay hiding suggestions to allow for click events on suggestions

    const relatedTarget = e.relatedTarget as HTMLElement | null

    if (relatedTarget && relatedTarget.getAttribute('role') === 'option') {
      return
    }

    setTimeout(() => {
      setIsFocused(false)
      setSuggestions([])
      setSelectedIndex(-1)
    }, 200)
  }

  return (
    <div className="w-full max-w-xs mx-auto relative">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="pr-10"
          aria-label="Search input"
          aria-autocomplete="list"
          aria-controls="suggestions-list"
          aria-expanded={suggestions.length > 0}
        />
        <Button
          size="icon"
          variant="ghost"
          onClick={onSubmit}
          className="absolute right-0 top-0 h-full"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {isLoading && isFocused && (
        <div
          className="mt-2 p-2 bg-background border rounded-md shadow-sm absolute z-10 w-full"
          aria-live="polite"
        >
          Loading...
        </div>
      )}
      {suggestions.length > 0 && !isLoading && isFocused && (
        <ul
          id="suggestions-list"
          className="mt-2 bg-background border rounded-md shadow-sm absolute z-10 w-full"
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`px-4 py-2 cursor-pointer hover:bg-muted ${
                index === selectedIndex ? 'bg-muted' : ''
              }`}
              // onClick={() => handleSuggestionClick(suggestion)}
              onMouseDown={(e) => {
                e.preventDefault() // Prevent input from losing focus too early
                handleSuggestionClick(suggestion)
              }}
              role="option"
              aria-selected={index === selectedIndex}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
