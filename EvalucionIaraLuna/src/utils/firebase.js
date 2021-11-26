import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDm5o4UNYK6yujiCBcqxZ-fjQrpooEprso",
  authDomain: "cet30-6cce6.firebaseapp.com",
  projectId: "cet30-6cce6",
  storageBucket: "cet30-6cce6.appspot.com",
  messagingSenderId: "29426054073",
  appId: "1:29426054073:web:bd90aa0e8f4585a6b5bc68",
  measurementId: "G-QX8HVFJZH3"
  };

//nos permite iniciar la conexion con firebase
 const app = initializeApp(firebaseConfig)
//inicia  la conexion con el servidor de firebase 
const db = getFirestore()
//ontenemos acceso al servidor de storage 
 const storage = getStorage(app)

 const auth = getAuth()

export { db, storage, auth};