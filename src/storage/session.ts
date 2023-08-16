import { IUser } from '../app/models/userTypes'

export const startSession = (user: IUser) => {
  if (user.accessToken && user.email) {
    sessionStorage.setItem('email', user.email)
    sessionStorage.setItem('accessToken', user.accessToken)
  }
}

export const getSession = () => {
  return {
    email: sessionStorage.getItem('email'),
    accessToken: sessionStorage.getItem('accessToken'),
  }
}

export const endSession = () => {
  sessionStorage.clear()
}

export const isLoggedIn = () => {
  return getSession().accessToken
}
