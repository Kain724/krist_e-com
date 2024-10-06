import s from './styles.module.scss'
import CardRestaurant, { IRestaurant } from '../CardRestaurant'
import CardDish, { IDish } from '../CardDish'

interface ICardContainerProps {
  restaurant: IRestaurant
  dish: IDish
}

const dishList = {
  DISH001: {
    name: 'Tom Yum Soup',
    type: 'Soup',
    rating: 4.8,
    deliveryTime: 20,
    price: 120,
    restaurantId: 1,
    restaurantName: 'Bistro',
    id: 1,
    image: '/Food.png',
  },
  DISH002: {
    name: 'Caesar Salad',
    type: 'Salad',
    rating: 4.5,
    deliveryTime: 15,
    price: 90,
    restaurantId: 2,
    restaurantName: 'The Italian Place',
    id: 2,
    image: '/Food.png',
  },
  DISH003: {
    name: 'Chicken Fajitas',
    type: 'Main Course',
    rating: 4.9,
    deliveryTime: 30,
    price: 180,
    restaurantId: 3,
    restaurantName: 'Seafood Heaven',
    id: 3,
    image: '/Food.png',
  },
  DISH004: {
    name: 'Greek Pizza',
    type: 'Pizza',
    rating: 4.2,
    deliveryTime: 25,
    price: 140,
    restaurantId: 4,
    restaurantName: 'Asian Fusion',
    id: 4,
    image: '/Food.png',
  },
  DISH005: {
    name: 'Shrimp Scampi',
    type: 'Seafood',
    rating: 4.7,
    deliveryTime: 20,
    price: 160,
    restaurantId: 5,
    restaurantName: 'French Delight',
    id: 5,
    image: '/Food.png',
  },
  DISH006: {
    name: 'Tiramisu',
    type: 'Dessert',
    rating: 4.6,
    deliveryTime: 10,
    price: 80,
    restaurantId: 6,
    restaurantName: 'Steakhouse',
    id: 6,
    image: '/Food.png',
  },
}

const restaurantsList = {
  RES001: {
    name: 'Bistro',
    city: 'New York',
    rating: 4.5,
    deliveryTime: 30,
    averageCheckForTwo: 1500,
    id: 1,
    image: '/Food.png',
  },
  RES002: {
    name: 'The Italian Place',
    city: 'Los Angeles',
    rating: 4.2,
    deliveryTime: 45,
    averageCheckForTwo: 1200,
    id: 2,
    image: '/Food.png',
  },
  RES003: {
    name: 'Seafood Heaven',
    city: 'Miami',
    rating: 4.8,
    deliveryTime: 20,
    averageCheckForTwo: 1800,
    id: 3,
    image: '/Food.png',
  },
  RES004: {
    name: 'Asian Fusion',
    city: 'Chicago',
    rating: 4.1,
    deliveryTime: 35,
    averageCheckForTwo: 1000,
    id: 4,
    image: '/Food.png',
  },
  RES005: {
    name: 'French Delight',
    city: 'San Francisco',
    rating: 4.6,
    deliveryTime: 25,
    averageCheckForTwo: 1400,
    id: 5,
    image: '/Food.png',
  },
  RES006: {
    name: 'Steakhouse',
    city: 'Dallas',
    rating: 4.4,
    deliveryTime: 40,
    averageCheckForTwo: 1600,
    id: 6,
    image: '/Food.png',
  },
}

const CardContainer = () => {
  return (
    <section className={s.container}>
      <section className={s.content}>
        <CardRestaurant restaurantList={restaurantsList} />
        <CardDish dishList={dishList} />
      </section>
    </section>
  )
}
export default CardContainer
