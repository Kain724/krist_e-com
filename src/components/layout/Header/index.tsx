'use client'
import Button from '@/components/ui/Button/index'
import SimpleSearchBar from '@/components/ui/SearchBar/SimpleSearchBar'
import s from './styles.module.scss'
import { Croissant } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [query, setQuery] = useState('')
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div>
          <h1>FeedMe</h1>
          <Croissant />
        </div>
        <nav className={s.navHeader}>
          <SimpleSearchBar
            onSearch={(query) => console.log(query)}
            placeholder={'Restaurants or dishes'}
            variantInput='searchInputHeader'
            variantForm='searchFormHeader'
          />
          <ShoppingBasket />
          <Button variant='pri'>Sign In</Button>
        </nav>
      </div>
    </header>
  )
}
export default Header

// TODO: loader/error page/intercept errors/
