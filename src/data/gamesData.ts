import { GameItem } from '../context/CartContext'

export const gamesData: GameItem[] = [
  {
    id: '1',
    title: 'Cyberpunk 2077',
    price: 59.99,
    discount: 50,
    image:
      'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5fGVufDF8fHx8MTc2NTgwODkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'RPG',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Fantasy Quest',
    price: 49.99,
    discount: 30,
    image:
      'https://images.unsplash.com/photo-1633287453177-24823499b02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHxlbnwxfHx8fDE3NjU3OTEyODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Adventure',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Speed Racing',
    price: 39.99,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1602940819863-2905852243ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lfGVufDF8fHx8MTc2NTg2MjQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Racing',
    rating: 4.6,
  },
]
