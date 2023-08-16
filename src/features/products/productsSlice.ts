import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../app/models/productTypes'

export interface ProductsState {
  products: IProduct[]
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsFromApiRequest(state) {
      state.isLoading = true
      state.products = []
      state.error = ''
    },
    getProductsFromApiSuccess(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload
      state.isLoading = false
      state.error = ''
    },
    getProductsFromApiFailed(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
      state.products = []
    },
  },
})

export const {
  getProductsFromApiRequest,
  getProductsFromApiSuccess,
  getProductsFromApiFailed,
} = productsSlice.actions
export default productsSlice.reducer
