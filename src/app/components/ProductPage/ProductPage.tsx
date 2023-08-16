import { FC, useEffect } from 'react'
import PlaceholderLoading from 'react-placeholder-loading'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../../actions/products/productsAction'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Header from '../Header/Header'
import Slider from '../UI/Slider/Slider'
import styles from './ProductPage.module.scss'

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => {
  const { product, isLoading, error } = useAppSelector(
    (state) => state.getProductByIdReducer
  )
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
    }
  }, [dispatch, id])

  if (isLoading && !product) {
    return (
      <>
        <Header />
        <PlaceholderLoading
          shape='rect'
          height={500}
          width={300}
          colorStart='rgba(76, 154, 255, 0.199)'
        />
      </>
    )
  }

  return (
    <>
      <Header />
      {error && <h3>{error}</h3>}
      <h2 className={styles.title}>{product && product.title}</h2>
      <div className={styles.product}>
        <Slider
          firstImage={product?.image}
          secondImage={product?.image}
          thirdImage={product?.image}
          altTitle={product?.title}
        />
        <div>
          <p className={styles.description}>
            <strong>Описание: </strong>
            {product?.description}
          </p>
          <div className={styles.category}>
            <strong>Категория: </strong>
            {product?.category}
          </div>
          <div className={styles.price}>
            <strong>Цена: </strong>
            {product?.price}
          </div>
          <div className={styles.rating}>
            <strong>Рейтинг: </strong>
            {product?.rating.rate}
          </div>
          <div className={styles.count}>
            <strong>Количество голосов: </strong>
            {product?.rating.count}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
