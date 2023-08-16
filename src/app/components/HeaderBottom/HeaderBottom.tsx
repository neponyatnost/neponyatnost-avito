import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import Button from '../UI/Button/Button'
import styles from './HeaderBottom.module.scss'

interface HeaderBottomProps {}

const HeaderBottom: FC<HeaderBottomProps> = () => {
  const [showCategories, setShowCategories] = useState<boolean>(false)

  const handleCategories = () => {
    setShowCategories((prevState) => !prevState)
  }

  return (
    <>
      <div className={styles.bottom}>
        <Link to={'/ads'} className={styles.mainLink}>
          <img src={logo} alt='Avito main page' width={110} height={38} />
        </Link>
        <Button text='Категории' onClick={handleCategories} />
        {showCategories && (
          <div className={styles.modal}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default HeaderBottom
