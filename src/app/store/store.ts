import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../../features/counter/counterSlice'
import favoritesReducer from '../../features/favorites/favoritesSlice'
import newAdReducer from '../../features/newAd/newAdSlice'
import createProductReducer from '../../features/products/createProductSlice'
import getProductByIdReducer from '../../features/products/getProductByIdSlice'
import productsReducer from '../../features/products/productsSlice'
import { pokemonApi } from '../../services/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    newAd: newAdReducer,
    favoritesReducer,
    productsReducer,
    getProductByIdReducer,
    createProductReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
