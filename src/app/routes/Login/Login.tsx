import { ChakraProvider, useToast } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInUser } from '../../../firebase'
import { startSession } from '../../../storage/session'
import Header from '../../components/Header/Header'
import Button from '../../components/UI/Button/Button'
import TextInput from '../../components/UI/TextInput/TextInput'

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useToast()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    if (!email || !password) {
      setError('Введите Вашу почту и пароль')
      return
    }
    setError('')
    try {
      const response = await signInUser(email, password)
      toast({
        title: 'Успех!',
        description: 'Вы успешно авторизовались',
        duration: 5000,
        isClosable: true,
        status: 'success',
      })
      startSession(response.user)
      navigate('/user')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
      setLoading(false)
      return error
    } finally {
      setLoading(false)
    }
  }

  return (
    <ChakraProvider>
      <Header />
      <div className='login'>
        <h5>Вход</h5>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <TextInput
            label='E-mail'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='example@example.com'
            type='email'
            value={email}
            required
          />
          <TextInput
            label='Пароль'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            placeholder=''
            required
          />
          <Button text={loading ? 'Загрузка...' : 'Войти'} disabled={loading} />
        </form>
        <p>
          Нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
        </p>
      </div>
    </ChakraProvider>
  )
}

export default Login
