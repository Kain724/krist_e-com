import clsx from 'clsx'
import s from './styles.module.scss'
import { title } from 'process'

interface ICardDishProps {
  dish: IDish
}

interface IDish {
  name: string
  type: string
  rating: number
  deliveryTime: number
  price: number
}

const dish: IDish = {
  name: 'Ресторан "Уютный уголок"',
  type: 'Москва',
  rating: 4,
  deliveryTime: 30,
  price: 200,
}

const CardDish = ({ dish }: ICardDishProps) => {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <div className={s.image}></div>
        <div className={s.info_wrap}>
          <h3>{dish.name}</h3>
          <div className={s.info}>
            <div>{dish.type}</div>
            <div>{dish.rating}</div>
            <div>{dish.deliveryTime}</div>
            <div>{dish.price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardDish
