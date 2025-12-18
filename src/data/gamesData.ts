import { GameItem } from '../context/CartContext'

export const gamesData: GameItem[] = [
  {
    id: '1',
    title: 'Madden 26',
    price: 59.99,
    discount: 50,
    image:
      'https://res.cloudinary.com/dfyl3dprx/image/upload/v1766041080/avatar/oe3rat6y8ipvyubv0ypp.jpg',
    category: 'RPG',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'College Football 26',
    price: 49.99,
    discount: 30,
    image:
      'https://res.cloudinary.com/dfyl3dprx/image/upload/v1766040966/avatar/ex4qmqqe64v9c3lbckxk.webp',
    category: 'Adventure',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Madden 23',
    price: 39.99,
    discount: 20,
    image:
      'https://res.cloudinary.com/dfyl3dprx/image/upload/v1766041101/avatar/ci6hxd9gkl0ecseidrsx.jpg',
    category: 'Racing',
    rating: 4.6,
  },
]
