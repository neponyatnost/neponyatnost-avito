import { FC } from 'react'
import Header from '../Header/Header'
import styles from './Business.module.scss'

interface BusinessProps {}

const Business: FC<BusinessProps> = () => {
  return (
    <>
      <Header />
      <div className={styles.business}></div>
      <h1 className={styles.heading}>Lorem ipsum dolor sit amet.</h1>
    </>
  )
}

export default Business
