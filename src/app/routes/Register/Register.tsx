import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../../../firebase'
import { startSession } from '../../../storage/session'
import Header from '../../components/Header/Header'
import Button from '../../components/UI/Button/Button'
import TextInput from '../../components/UI/TextInput/TextInput'

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    if (!email || !password || !repeatPassword) {
      setError('Введите Вашу почту и пароль')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    setError('')
    try {
      const response = await createUser(email, password)
      startSession(response.user)
      navigate('/user')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <div>
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
          <TextInput
            label='Повторите пароль'
            name='repeatPassword'
            onChange={(e) => setRepeatPassword(e.target.value)}
            type='password'
            value={repeatPassword}
            placeholder=''
            required
          />
          <Button
            text={loading ? 'Загрузка...' : 'Зарегистрироваться'}
            disabled={loading}
          />
        </form>
        <p>
          Есть аккаунт? <Link to={'/login'}>Войти</Link>
        </p>
      </div>
    </>
  )
}

export default Register
