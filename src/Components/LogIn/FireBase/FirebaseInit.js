import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBaseConfic";





const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;