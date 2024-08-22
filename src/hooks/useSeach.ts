import { useState, useCallback } from 'react'

interface IUseSearchResult {
  query: string
  selectedOption: string
  setQuery: (query: string) => void
  setSelectedOption: (option: string) => void
  handleSearch: () => void
}

export const useSearch = (): IUseSearchResult => {
  const [query, setQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleSearch = useCallback(() => {
    const searchTerm = selectedOption || query
    console.log('Searching with:', searchTerm)
  }, [query, selectedOption])

  return {
    query,
    selectedOption,
    setQuery,
    setSelectedOption,
    handleSearch,
  }
}
