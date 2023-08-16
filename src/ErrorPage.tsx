import {FC} from 'react'
import {useRouteError} from 'react-router-dom'
import Header from './app/components/Header/Header'

interface ErrorPageProps {
}

const ErrorPage: FC<ErrorPageProps> = ({}) => {
  const error = useRouteError()

  return (
    <>
      <Header/>
      <div>
        <h1>
          {error ? 'Oops, an error was occured. Please, try again later.' : ''}
        </h1>
      </div>
    </>
  )
}

export default ErrorPage
