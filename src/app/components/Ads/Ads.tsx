import { FC, useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { fetchProductsFromApi } from '../../../actions/products/productsAction'
import '../../../test.js'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import Loader from '../UI/Loader/Loader'
import TextInput from '../UI/TextInput/TextInput'
import styles from './Ads.module.scss'

interface AdsProps {}

const Ads: FC<AdsProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { products, isLoading, error } = useAppSelector(
    (state: RootState) => state.productsReducer
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProductsFromApi())
  }, [dispatch])

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value)
  }

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const memoProducts = useMemo(
    () =>
      products.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [products, searchQuery]
  )
  return (
    <>
      <Header />
      <TextInput
        name='search'
        onChange={handleSearchQuery}
        required={false}
        type='text'
        value={searchQuery}
        placeholder='Поиск по объявлениям'
        label=' '
      />
      <div className={styles.ads}>
        {isLoading && (
          <div>
            <Loader />
            <Loader />
          </div>
        )}
        {error && <h3>{error}</h3>}
        {memoProducts &&
          memoProducts.map((prod) => (
            <ProductCard
              id={prod.id}
              category={prod.category}
              description={prod.description}
              image={prod.image}
              price={prod.price}
              rating={prod.rating}
              title={prod.title}
              key={uuid()}
            />
          ))}
      </div>
    </>
  )
}

export default Ads
