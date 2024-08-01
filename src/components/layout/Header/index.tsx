import Button from '@/components/ui/Button/index'
import SearchBar from '@/components/ui/SearchBar'
import s from './styles.module.scss'
import { Croissant } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div>
          <h1>FeedMe</h1>
          <Croissant />
        </div>
        <nav>
          <SearchBar placeholder={'Restaurants or dishes'} />
          <ShoppingBasket />
          <Button variant='pri'>Sign In</Button>
        </nav>
      </div>
    </header>
  )
}
export default Header
