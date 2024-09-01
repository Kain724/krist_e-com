import s from './styles.module.scss'
import CardRestaurant from '../CardRestaurant'
import CardDish from '../CardDish'

interface ICardContainerProps {
  restaurant: IRestaurant
  dish: IDish
}

const CardContainer = ({ restaurant, dish }: ICardContainerProps) => {
  return (
    <div className={s.container}>
      <CardRestaurant restaurant={restaurant} />
      <CardDish dish={dish} />
    </div>
  )
}
export default CardContainer
