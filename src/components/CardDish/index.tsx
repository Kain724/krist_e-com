import clsx from 'clsx'
import { PackageCheck, Receipt, Star } from 'lucide-react'
import Image from 'next/image'

import s from './styles.module.scss'

interface ICardDishProps {
  dishList: { [key: string]: IDish }
  variant?: 'default' | 'search'
}

export interface IDish {
  name: string
  type: string
  rating: number
  deliveryTime: number
  price: number
  restaurantId: number
  restaurantName: string
  id: number
  image: string
}

const CardDish = ({ dishList, variant = 'default' }: ICardDishProps) => {
  return (
    <div className={s.container_card}>
      <header>
        <h3>Best Food</h3>
      </header>
      <ul className={s.container_item}>
        {Object.values(dishList).map((dish) => (
          <li
            className={s.item}
            key={dish.id}
          >
            <div className={s.image}>
              <Image
                src={dish.image}
                alt={dish.name}
                width={200}
                height={200}
              />
            </div>{' '}
            <div
              className={clsx(s.info_wrap, {
                [s.itemDefault]: variant === 'default',
                [s.itemSearch]: variant === 'search',
              })}
            >
              <div>Restaurant - {dish.restaurantName}</div>
              <div className={s.info}>
                <h3>{dish.name}</h3>
                <div>
                  <Star />
                  {dish.rating}
                </div>
              </div>
              <div className={s.info_sub}>
                <div>
                  {' '}
                  <PackageCheck />
                  {dish.deliveryTime}
                </div>
                <div>
                  <Receipt />
                  {dish.price}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CardDish
