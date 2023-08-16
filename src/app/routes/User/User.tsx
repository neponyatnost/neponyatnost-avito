import { ChakraProvider } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { endSession, getSession, isLoggedIn } from '../../../storage/session'
import Header from '../../components/Header/Header'
import Button from '../../components/UI/Button/Button'
import ModalComponent from '../../components/UI/ModalComponent/ModalComponent'

interface UserProps {}

const User: FC<UserProps> = ({}) => {
  const [email, setEmail] = useState<string | null>('')
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login')
    }

    const session = getSession()
    setEmail(session.email)
  }, [navigate])

  const onClose = () => {
    endSession()
    navigate('/login')
  }

  const onStay = () => {
    setIsOpen(false)
  }

  const onOpen = () => {
    setIsOpen(true)
  }

  return (
    <ChakraProvider>
      <Header />
      <div>
        <h5 style={{ color: '#fff' }}>Вы вошли как: {email}</h5>
      </div>
      <Button text='Выйти' onClick={onOpen} />
      <ModalComponent
        children={<p>Вы уверены?</p>}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={'Выйти'}
        buttonTextTwo={'Остаться'}
        onStay={onStay}
      />
    </ChakraProvider>
  )
}

export default User
