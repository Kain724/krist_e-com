'use client'
import React, { useState } from 'react'
import SearchBarBase from './SearchBarBase'
import s from './styles.module.scss'

interface DropdownSearchBarProps {
  placeholder?: string
  options: string[]
  onSelect: (option: string) => void
}

const DropdownSearchBar = ({ placeholder = '', options, onSelect }: DropdownSearchBarProps) => {
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSelect = (option: string) => {
    setQuery(option)
    setShowDropdown(false)
    onSelect(option)
  }

  return (
    <div className={s.dropdownContainer}>
      <SearchBarBase
        placeholder={placeholder}
        value={query}
        onChange={(value) => {
          setQuery(value)
          setShowDropdown(true)
        }}
      />
      {showDropdown && (
        <ul className={s.dropdownList}>
          {options
            .filter((option) => option.toLowerCase().includes(query.toLowerCase()))
            .map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={s.dropdownItem}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownSearchBar
