import clsx from 'clsx'
import s from './styles.module.scss'
import Image from 'next/image'
import { HandPlatter, Star, Users } from 'lucide-react'

interface ICardRestaurantProps {
  restaurantList: { [key: string]: IRestaurant }
}

export interface IRestaurant {
  name: string
  city: string
  rating: number
  deliveryTime: number
  averageCheckForTwo: number
  id: number

  image: string
}

const CardRestaurant = ({ restaurantList }: ICardRestaurantProps) => {
  return (
    <div className={s.container_card}>
      <header>
        <h3>Restaurants</h3>
      </header>
      <ul className={s.container_item}>
        {Object.values(restaurantList).map((restaurant) => (
          <li
            className={s.item}
            key={restaurant.id}
          >
            <div className={s.image}>
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={200}
                height={200}
              />
            </div>{' '}
            <div className={s.info_wrap}>
              <div>City - {restaurant.city}</div>

              <div className={s.info}>
                <h3> {restaurant.name}</h3>
                <div>
                  <Star />
                  {restaurant.rating}
                </div>
              </div>
              <div className={s.info_sub}>
                <div>
                  {' '}
                  <HandPlatter />
                  {restaurant.deliveryTime}
                </div>
                <div>
                  <Users />
                  {restaurant.averageCheckForTwo}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CardRestaurant
