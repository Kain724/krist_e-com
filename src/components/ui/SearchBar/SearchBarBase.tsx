'use client'
import React, { useState } from 'react'
import searchIcon from '/public/search.svg'
import clsx from 'clsx'
import s from './styles.module.scss'

interface ISearchBarBaseProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  variantInput?: 'searchInputHeader' | 'searchInputInfo'
  className?: string
  onClick?: () => void
}

const SearchBarBase = ({
  placeholder = '',
  value,
  onChange,
  className,
  variantInput,
}: ISearchBarBaseProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <input
      type='text'
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      placeholder={placeholder}
      className={clsx(
        s.searchInput,
        {
          [s.searchInputHeader]: variantInput === 'searchInputHeader',
          [s.searchInputInfo]: variantInput === 'searchInputInfo',
        },
        className
      )}
    />
  )
}

export default SearchBarBase
