import axios from 'axios'

export async function getAutocompleteSuggestions(query: string): Promise<string[]> {
//   if (!query) return []
//   const response = await axios.get(`/api/products/autocomplete?query=${query}`)
//   return response.data

    const allSuggestions = [
        'React',
        'Redux',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'GraphQL',
        'Vue.js',
        'Angular',
        'Svelte',
        'Tailwind CSS',
        'Sass',
        'Webpack',
        'Babel',
        'ESLint',
        'Jest',
        'Cypress',
    ]

    return allSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase())
  )
}