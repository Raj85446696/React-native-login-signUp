import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAD7LGRkK4KNXcdJQp6iD8tyPJnBGfnNmc", 
  authDomain: "vivaahdecor-82191.firebaseapp.com",
  projectId: "vivaahdecor-82191",
  storageBucket: "vivaahdecor-82191.appspot.com",
  messagingSenderId: "857734451904",
  appId: "1:857734451904:android:63f25f8dc81663a8379325",
};


const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


export { app };