'use client'
import React, { useState } from 'react'
import SearchBarBase from './SearchBarBase'
import s from './styles.module.scss'

interface IDropdownSearchBarProps {
  placeholder?: string
  options: string[]
  onClick: (option: string) => void
  variantInput?: 'searchInputHeader' | 'searchInputInfo'
  onSelect: (option: string) => void
}

const DropdownSearchBar = ({
  placeholder = '',
  options,
  onClick,
  onSelect,
}: IDropdownSearchBarProps) => {
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(true)

  const handleSelect = (option: string) => {
    setQuery(option)
    setShowDropdown(false)
    onClick(option)
  }

  return (
    <div className={s.dropdownContainer}>
      {showDropdown && (
        <select className={s.dropdownList}>
          {options
            .filter((option) => option.toLowerCase().includes(query.toLowerCase()))
            .map((option, index) => (
              <option
                key={index}
                // onClick={() => handleSelect(option)}
                className={s.dropdownItem}
                onSelect={() => {
                  handleSelect(option)
                  onSelect
                }}
              >
                {option}
              </option>
            ))}
        </select>
      )}
    </div>
  )
}

export default DropdownSearchBar
