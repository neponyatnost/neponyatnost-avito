import { FC, useEffect } from 'react'
import { fetchProductsFromApi } from '../../../actions/products/productsAction'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import styles from '../Ads/Ads.module.scss'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import Loader from '../UI/Loader/Loader'

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => {
  const { favorites } = useAppSelector((state) => state.favoritesReducer)
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productsReducer
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProductsFromApi())
  }, [dispatch])

  const filteredProducts = favorites.map((f) =>
    products.filter((p) => p.id.toString() === f)
  )

  if (!favorites.length) {
    return (
      <>
        <Header />
        <h3>Список избранного пуст.</h3>
      </>
    )
  }

  if (isLoading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    )
  }

  return (
    <>
      <Header />
      {error && <h3>{error}</h3>}
      <div className={styles.ads}>
        {filteredProducts &&
          filteredProducts.map((items) =>
            items.map((item) => (
              <ProductCard
                id={item.id}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
                key={item.id}
              />
            ))
          )}
      </div>
    </>
  )
}

export default Favorites
