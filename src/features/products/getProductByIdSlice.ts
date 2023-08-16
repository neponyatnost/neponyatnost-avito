import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../app/models/productTypes'

export interface ProductByIdState {
  product: IProduct | null
  isLoading: boolean
  error: string
}

const initialState: ProductByIdState = {
  product: null,
  isLoading: false,
  error: '',
}

export const getProductByIdSlice = createSlice({
  name: 'getProductById',
  initialState,
  reducers: {
    getProductByIdRequest(state) {
      state.isLoading = true
      state.product = null
      state.error = ''
    },
    getProductByIdSuccess(state, action: PayloadAction<IProduct>) {
      state.product = action.payload
      state.isLoading = false
      state.error = ''
    },
    getProductByIdFailed(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
      state.product = null
    },
  },
})

export const {
  getProductByIdRequest,
  getProductByIdSuccess,
  getProductByIdFailed,
} = getProductByIdSlice.actions
export default getProductByIdSlice.reducer
