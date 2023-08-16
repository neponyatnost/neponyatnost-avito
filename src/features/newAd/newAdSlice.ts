import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAd } from './../../app/models/adTypes'

export interface AdsProps {
  ads: IAd[]
}

const initialState: AdsProps = {
  ads: [
    {
      id: '1fghjsxfchbsrtth23asfdsfghsjetje',
      title: 'Штаны',
      price: '40 гривен',
      img: 'https://90.img.avito.st/image/1/1.8rLSPLa4XlvklZxeuj_a8uqeXF1sndxTpJhcWWKVVlFk.YRIbaocyix682EvaUey276kuCtcikOsTzgsbfUalAcI',
      city: 'Залуподрищенск',
      district: 'АО ОАО',
      date: new Date().toLocaleDateString('ru', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
      isFavorite: false,
    },
    {
      id: '123azdfgkhklu4tfagastgfagz',
      title: 'Портки',
      price: '403 гривен',
      img: 'https://90.img.avito.st/image/1/1.8rLSPLa4XlvklZxeuj_a8uqeXF1sndxTpJhcWWKVVlFk.YRIbaocyix682EvaUey276kuCtcikOsTzgsbfUalAcI',
      city: 'Залуподрищенск',
      district: 'АО ОАО',
      date: new Date().toLocaleDateString('ru', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
      isFavorite: false,
    },
  ],
}

export const newAdSlice = createSlice({
  name: 'newAd',
  initialState,
  reducers: {
    addNewAd(state, action: PayloadAction<IAd>) {
      state.ads = [...state.ads, action.payload]
    },
  },
})

export const { addNewAd } = newAdSlice.actions
export default newAdSlice.reducer
