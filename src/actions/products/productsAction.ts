import axios from 'axios'
import { IProduct } from '../../app/models/productTypes'
import { AppDispatch } from '../../app/store/store'
import {
  createProductFailed,
  createProductRequest,
  createProductSuccess,
} from '../../features/products/createProductSlice'
import {
  getProductByIdFailed,
  getProductByIdRequest,
  getProductByIdSuccess,
} from '../../features/products/getProductByIdSlice'
import {
  getProductsFromApiFailed,
  getProductsFromApiRequest,
  getProductsFromApiSuccess,
} from '../../features/products/productsSlice'

export const fetchProductsFromApi = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getProductsFromApiRequest())
    const { data } = await axios.get<IProduct[]>(
      'https://fakestoreapi.com/products'
    )
    dispatch(getProductsFromApiSuccess(data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getProductsFromApiFailed(error.message))
    } else {
      return error
    }
  }
}

export const fetchProductById =
  (id: number | string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getProductByIdRequest())
      const { data } = await axios.get<IProduct>(
        `https://fakestoreapi.com/products/${id}`
      )
      dispatch(getProductByIdSuccess(data))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getProductByIdFailed(error.message))
      }
      return error
    }
  }

export const createProduct =
  (
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(createProductRequest())
      const data = await axios
        .post(
          'https://fakestoreapi.com/products',
          {
            title,
            price,
            description,
            image,
            category,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => console.log(res))
      dispatch(createProductSuccess(JSON.stringify(data)))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(createProductFailed(error.message))
      }
      return error
    }
  }
