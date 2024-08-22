'use client'
import React, { useState } from 'react'
import SearchBarBase from './SearchBarBase'
import clsx from 'clsx'
import s from './styles.module.scss'

interface ISimpleSearchBarProps {
  placeholder?: string
  onSearch: (query: string) => void
  variantInput?: 'searchInputHeader' | 'searchInputInfo'
  variantForm?: 'searchFormHeader' | 'searchFormInfo'
  className?: string
}

const SimpleSearchBar = ({
  placeholder = '',
  onSearch,
  className,
  variantInput,
  variantForm,
}: ISimpleSearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        s.searchForm,
        {
          [s.searchFormHeader]: variantForm === 'searchFormHeader',
          [s.searchFormInfo]: variantForm === 'searchFormInfo',
        },
        className
      )}
    >
      <SearchBarBase
        placeholder={placeholder}
        value={query}
        onChange={setQuery}
        variantInput={variantInput}
      />
    </form>
  )
}

export default SimpleSearchBar
