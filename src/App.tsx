import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Ads from './app/components/Ads/Ads'
import Business from './app/components/Business/Business'
import CreateAd from './app/components/CreateAd/CreateAd'
import Favorites from './app/components/Favorites/Favorites'
import ProductPage from './app/components/ProductPage/ProductPage'
import Slider from './app/components/UI/Slider/Slider'
import Login from './app/routes/Login/Login'
import Register from './app/routes/Register/Register'
import User from './app/routes/User/User'

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Ads />} />
          <Route path='/business' element={<Business />} />
          <Route path='/create' element={<CreateAd />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user' element={<User />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/product/:id?' element={<ProductPage />} />
          <Route path='/vacancies' element={<Slider />} />
        </Routes>
      </div>
    </>
  )
}

export default App
