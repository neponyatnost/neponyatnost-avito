import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../features/favorites/favoritesSlice'
import { IProduct } from '../../models/productTypes'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Loader from '../UI/Loader/Loader'
import RatingMemoized from '../UI/RatingComponent/RatingComponent'
import styles from './ProductCard.module.scss'

interface ProductCardProps {}

const ProductCard: FC<IProduct> = ({
  category,
  description,
  id,
  image,
  price,
  rating: { rate, count },
  title,
}) => {
  const [rating, setRating] = useState(rate)
  const [counter, setCounter] = useState(count)
  const [readOnly, setReadOnly] = useState(false)
  const { favorites } = useAppSelector((state) => state.favoritesReducer)
  const dispatch = useAppDispatch()

  const setFav = (id: string) => {
    dispatch(addToFavorites(id))
  }

  const removeFav = (id: string) => {
    dispatch(removeFromFavorites(id))
  }

  const handleRating = (rated: number) => {
    setRating(rated)
    setCounter(count + 1)
    setReadOnly(true)
  }

  const fillColorArray = [
    '#f17a45',
    '#f17a45',
    '#f19745',
    '#f19745',
    '#f1a545',
    '#f1a545',
    '#f1b345',
    '#f1b345',
    '#f1d045',
    '#f1d045',
  ]

  return (
    <div className={styles.ad}>
      {favorites.includes(id.toString()) && (
        <p className={styles.favorite} onClick={() => removeFav(id.toString())}>
          ♥
        </p>
      )}
      {!favorites.includes(id.toString()) && (
        <p className={styles.favorite} onClick={() => setFav(id.toString())}>
          ♡
        </p>
      )}
      <p>
        <strong>Голосов: </strong>
        {counter}
      </p>
      <p>
        <strong>Оценка: </strong>
        <RatingMemoized
          size={22}
          rating={rating}
          transition
          fillColorArray={fillColorArray}
          handleRating={handleRating}
          readOnly={readOnly}
        />
      </p>
      <Link to={`/product/${id}`} className={styles.title}>
        {title}
      </Link>
      <p>
        <strong>Цена:</strong>{' '}
        {price.toLocaleString('ru', { style: 'currency', currency: 'EUR' })}
      </p>
      {image ? (
        <img src={image} alt={title} width={290} height={200} />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ProductCard
