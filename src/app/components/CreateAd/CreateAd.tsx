import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../../actions/products/productsAction'
import { IProduct } from '../../models/productTypes'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Header from '../Header/Header'
import Button from '../UI/Button/Button'
import TextInput from '../UI/TextInput/TextInput'
import styles from './CreateAd.module.scss'

interface CreateAdProps {}

const CreateAd: FC<CreateAdProps> = () => {
  const { product, isLoading, error } = useAppSelector(
    (state) => state.createProductReducer
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState<IProduct>({
    id: 21,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: '',
    rating: {
      count: 0,
      rate: 0,
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(
      createProduct(
        newItem.title,
        newItem.price,
        newItem.description,
        newItem.image,
        newItem.category
      )
    )
    navigate('/ads')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    setNewItem((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }))
  }

  return (
    <>
      <Header />
      <div className={styles.create + ' '}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            label='Название'
            type='text'
            value={newItem.title}
            placeholder='Название товара'
            onChange={handleChange}
            name={'title'}
            required
          />
          <TextInput
            label='Цена'
            type='text'
            value={newItem.price.toString()}
            placeholder='Цена товара'
            onChange={handleChange}
            name={'price'}
            required
          />
          <TextInput
            label='Изображение'
            type='text'
            value={newItem.image}
            placeholder='Ссылка на изображение'
            onChange={handleChange}
            name={'image'}
            required
          />
          <TextInput
            label='Описание'
            type='text'
            value={newItem.description}
            placeholder=''
            onChange={handleChange}
            name={'description'}
            required
          />
          <TextInput
            label='Категория'
            type='text'
            value={newItem.category}
            placeholder=''
            onChange={handleChange}
            name={'category'}
            required
          />
          <Button
            disabled={newItem.title.length < 5}
            text='Создать'
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </>
  )
}

export default CreateAd
