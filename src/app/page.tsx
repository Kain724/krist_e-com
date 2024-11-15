'use client'
import { useState } from 'react'

import Apple from '/public/apple.svg'
import Banana from '/public/banana.svg'
import FourPlatesImg from '/public/foodMain1.svg'
import SoupImg from '/public/foodMain2.svg'
import { useWindowSize } from 'react-use'

import CardContainer from '@/components/CardContainer'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select/index'
import { useSearch } from '@/hooks/useSearch'

import s from './page.module.scss'

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
        <div className={s.select_box}>
          <Select
            options={dropdownOptions}
            onSelect={(option) => console.log(option)}
            onClick={() => console.log}
          />{' '}
          <Button>Get Started</Button>
        </div>
      </div>
      <div className={s.showcase}>
        <SoupImg />
        <FourPlatesImg />
      </div>
      <CardContainer />
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
        <div className={s.select_box}>
          <Select
            options={dropdownOptions}
            onSelect={(option) => console.log(option)}
            onClick={() => console.log}
          />
          <Button>Get Started</Button>
        </div>
      </div>
      <CardContainer />
    </section>
  )

  return (
    <main className={s.main_container}>{width >= 310 ? contentBigScreen : contentSmallScreen}</main>
  )
}

export default Home
