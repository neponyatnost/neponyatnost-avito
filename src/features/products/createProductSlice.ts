import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CreateProductState {
  product: string | null
  isLoading: boolean
  error: string
}

const initialState: CreateProductState = {
  product: null,
  isLoading: false,
  error: '',
}

export const createProductSlice = createSlice({
  name: 'createProduct',
  initialState,
  reducers: {
    createProductRequest(state) {
      state.isLoading = true
      state.product = null
      state.error = ''
    },
    createProductSuccess(state, action: PayloadAction<string>) {
      state.product = action.payload
      state.isLoading = false
      state.error = ''
    },
    createProductFailed(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
      state.product = null
    },
  },
})

export const {
  createProductRequest,
  createProductSuccess,
  createProductFailed,
} = createProductSlice.actions
export default createProductSlice.reducer
