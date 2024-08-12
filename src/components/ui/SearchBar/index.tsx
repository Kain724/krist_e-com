'use client'
import React, { useState } from 'react'
import searchIcon from '/public/search.svg'

interface SearchBarProps {
  //   onSearch: (query: string) => void
  placeholder?: string
}

const SearchBar = ({ placeholder = '' }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // onSearch(query)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='h-full w-full'
    >
      <input
        type='text'
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        placeholder={placeholder}
        className='rounded border'
      />
    </form>
  )
}

export default SearchBar
