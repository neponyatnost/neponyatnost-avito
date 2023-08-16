import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBQEcOenSasO3di8_ugZIxfvJnVeRIXeyc',
  authDomain: 'avito-e513f.firebaseapp.com',
  projectId: 'avito-e513f',
  storageBucket: 'avito-e513f.appspot.com',
  messagingSenderId: '33138134371',
  appId: '1:33138134371:web:31fcc154f9f36b313d9756',
}

export const app = initializeApp(firebaseConfig)

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password)
}

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password)
}
