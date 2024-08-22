'use client'
import { useWindowSize } from 'react-use'
import SoupImg from '/public/foodMain2.svg'
import FourPlatesImg from '/public/foodMain1.svg'
import Banana from '/public/banana.svg'
import Apple from '/public/apple.svg'

import s from './page.module.scss'
import SimpleSearchBar from '@/components/ui/SearchBar/SimpleSearchBar'
import DropdownSearchBar from '@/components/ui/SearchBar/DropdownSearchBar'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { useSearch } from '@/hooks/useSeach'

const Home = () => {
  const { width } = useWindowSize()
  const [isDropdownNeeded, setIsDropdownNeeded] = useState(true)
  //   const [isDropdownNeeded, setIsDropdownNeeded] = useState(false)
  const { query, selectedOption, setQuery, setSelectedOption, handleSearch } = useSearch()

  const dropdownOptions = ['London', 'Paris', 'Berlin', 'Budapest', 'Rome']

  const contentBigScreen = (
    <section className={s.main}>
      <div className={s.info}>
        <h2>
          Premium <span className={s.text_color}>quality</span>
          <br />
          Food for your
          <span className={s.wrap_banana}>
            <Banana />
          </span>
          <span className={s.text_color}>healthy</span> <br />
          <span className={s.wrap_apple}>
            <Apple />
          </span>
          <span className={s.text_color}>& Daily Life</span>
        </h2>
        <p>                     
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae placeat
          accusantium harum voluptatum saepe quam obcaecati quaerat? Repellat, voluptatibus. Maiores
          ullam odit voluptate nostrum a quia voluptates, sit saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima repudiandae placeat accusantium harum voluptatum
          saepe quam obcaecati quaerat? Repellat, voluptatibus. Maiores ullam odit voluptate nostrum
          a quia voluptates, sit saepe.
        </p>
        <div className={s.wrap_filter}>
          <DropdownSearchBar
            placeholder='Choose city in Europe'
            options={dropdownOptions}
            onClick={() => console.log}
            onSelect={(option) => console.log(option)}
          />
          <Button>Get Started</Button>
        </div>
        <div className={s.wrap_recommendation}>
          <h3>Popular cities in Europe</h3>
          <ul>
            <li>London</li>
            <li>Paris</li>
            <li>Berlin</li>
            <li>Budapest</li>
            <li>Rome</li>
          </ul>
        </div>
      </div>
      <div className={s.showcase}>
        <SoupImg />
        <FourPlatesImg />
      </div>
    </section>
  )

  const contentSmallScreen = (
    <section className={s.main}>
      <div className={s.info}>
        <h2>
          Premium <span className={s.text_color}>quality</span>
          <br />
          Food for your
          <span className={s.text_color}>healthy</span> <br />
          <span className={s.wrap_apple}>
            <Apple />
          </span>
          <span className={s.text_color}>& Daily Life</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae placeat
          accusantium harum voluptatum saepe quam obcaecati quaerat? Repellat, voluptatibus. Maiores
          ullam odit voluptate nostrum a quia voluptates, sit saepe.
        </p>
        <div className={s.wrap_filter}>
          <DropdownSearchBar
            placeholder='Search...'
            options={dropdownOptions}
            onSelect={(option) => console.log(option)}
            variantInput='searchInputInfo'
            onClick={() => console.log}
          />
          <Button>Get Started</Button>
        </div>
        <div className={s.wrap_recommendation}>
          <h3>Popular cities in Europe</h3>
          <ul>
            <li>London</li>
            <li>Paris</li>
            <li>Berlin</li>
            <li>Budapest</li>
            <li>Rome</li>
          </ul>
        </div>
      </div>
    </section>
  )

  return (
    <main className={s.main_container}>{width >= 310 ? contentBigScreen : contentSmallScreen}</main>
  )
}

export default Home
