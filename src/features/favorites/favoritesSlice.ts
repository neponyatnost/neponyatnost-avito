import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface FavoritesState {
  favorites: string[]
}

const initialState: FavoritesState = {
  favorites: JSON.parse(sessionStorage.getItem('favorites') ?? '[]'),
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload)
      sessionStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((fav) => fav !== action.payload)
      sessionStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
