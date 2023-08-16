import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NamedAPIResourceList } from 'pokenode-ts'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<NamedAPIResourceList, number>({
      query: (limit) => `pokemon/?limit=${limit}&offset=0`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
