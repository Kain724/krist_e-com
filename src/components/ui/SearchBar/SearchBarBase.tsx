'use client'
import React, { useState } from 'react'
import searchIcon from '/public/search.svg'
import s from './styles.module.scss'

interface SearchBarBaseProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const SearchBarBase = ({ placeholder = '', value, onChange }: SearchBarBaseProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // onSearch(query)
  }

  return (
    <input
      type='text'
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      placeholder={placeholder}
      className='rounded border'
      //   value={value}
      //   onChange={(e) => onChange(e.target.value)}
      //   className={styles.searchInput}
    />
  )
}

export default SearchBarBase
