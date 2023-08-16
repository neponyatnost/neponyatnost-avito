import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter, Navigate, createBrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorPage from './ErrorPage'
import Ads from './app/components/Ads/Ads'
import Business from './app/components/Business/Business'
import CreateAd from './app/components/CreateAd/CreateAd'
import Favorites from './app/components/Favorites/Favorites'
import ProductPage from './app/components/ProductPage/ProductPage'
import Slider from './app/components/UI/Slider/Slider'
import Login from './app/routes/Login/Login'
import Register from './app/routes/Register/Register'
import User from './app/routes/User/User'
import { store } from './app/store/store'
import './firebase'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/login'} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create',
    element: <CreateAd />,
  },
  {
    path: '/ads',
    element: <Ads />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/business',
    element: <Business />,
  },
  {
    path: '/product/:id?',
    element: <ProductPage />,
  },
  {
    path: '/vacancies',
    element: <Slider />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter>
    <Provider store={store}>
      <div className='container'>
        {/* <RouterProvider router={router} /> */}
        <App />
      </div>
    </Provider>
  </HashRouter>
)
