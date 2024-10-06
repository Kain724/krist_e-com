import './react-select.scss'
import 'react-select'

import React, { useState } from 'react'

import Select from 'react-select'

import s from './styles.module.scss'

interface IOptionSelectProps {
  placeholder?: string
  options: string[]
  onClick: (option: string) => void
  variantInput?: 'searchInputHeader' | 'searchInputInfo'
  onSelect: (option: string) => void
}

const OptionSelect = ({ placeholder = '', options, onClick, onSelect }: IOptionSelectProps) => {
  const [query, setQuery] = useState('')

  const handleSelect = (option: { value: string } | null) => {
    if (option) {
      setQuery(option.value)
      onClick(option.value)
    }
  }

  return (
    <div className={s.select_wrapper}>
      <Select
        classNamePrefix={'custom-select'}
        className='control'
        onChange={(option) => handleSelect(option)}
        options={options.map((option) => ({ value: option, label: option }))}
        placeholder={'Choose a restaurant city'}
      />
    </div>
  )
}

export default OptionSelect
