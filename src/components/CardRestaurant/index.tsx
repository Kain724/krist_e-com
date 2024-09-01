import clsx from 'clsx'
import s from './styles.module.scss'

interface ICardRestaurantProps {
  restaurant: IRestaurant
}

interface IRestaurant {
  name: string
  city: string
  rating: number
  deliveryTime: number
  averageCheckForTwo: number
}

const CardRestaurant = ({ restaurant }: ICardRestaurantProps) => {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <div className={s.image}></div>
        <div className={s.info_wrap}>
          <h3>{restaurant.name}</h3>
          <div className={s.info}>
            <div>{restaurant.city}</div>
            <div>{restaurant.rating}</div>
            <div>{restaurant.deliveryTime}</div>
            <div>{restaurant.averageCheckForTwo}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardRestaurant
