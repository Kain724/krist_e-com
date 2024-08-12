'use client'
import React, { useState } from 'react'
import SearchBarBase from './SearchBarBase'
import s from './styles.module.scss'

interface SimpleSearchBarProps {
  placeholder?: string
  onSearch: (query: string) => void
}

const SimpleSearchBar = ({ placeholder = '', onSearch }: SimpleSearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.searchForm}
    >
      <SearchBarBase
        placeholder={placeholder}
        value={query}
        onChange={setQuery}
      />
    </form>
  )
}

export default SimpleSearchBar
