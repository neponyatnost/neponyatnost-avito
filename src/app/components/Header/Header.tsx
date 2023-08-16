import { useToast } from '@chakra-ui/react'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { isLoggedIn } from '../../../storage/session'
import { useAppSelector } from '../../store/hooks'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import styles from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { favorites } = useAppSelector((state) => state.favoritesReducer)
  const toast = useToast()

  return (
    <>
      <div className={styles.header}>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
            >
              Главная
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to='/business'
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
              onClick={() =>
                toast({
                  title: 'test',
                  description: 'test test',
                  duration: 10000,
                  isClosable: true,
                })
              }
            >
              Для бизнеса
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/vacancies'
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
            >
              Вакансии
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/help'
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
            >
              Помощь
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/catalogs'
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
            >
              Каталоги
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/care'
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
            >
              Авито Польза
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to='/favorites'
              style={{
                fontSize: '2rem',
              }}
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.link}`
              }
            >
              <span className={styles.favoritesLink}>
                ♥
                {favorites.length ? (
                  <div className={styles.favoritesCounter}>
                    <span>{favorites.length}</span>
                  </div>
                ) : (
                  ''
                )}
              </span>
            </NavLink>
          </li>
          <li>
            {isLoggedIn() ? (
              <NavLink
                to={'/user'}
                className={({ isActive }) =>
                  `${isActive ? styles.active : styles.link}`
                }
              >
                Личный кабинет
              </NavLink>
            ) : (
              <NavLink
                to={'/login'}
                className={({ isActive }) =>
                  `${isActive ? styles.active : styles.link}`
                }
              >
                Вход и регистрация
              </NavLink>
            )}
          </li>
          <li>
            {isLoggedIn() && (
              <NavLink
                to='/create'
                className={({ isActive }) =>
                  `${isActive ? styles.active : styles.link}`
                }
              >
                Разместить объявление
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <HeaderBottom />
    </>
  )
}

export default Header
