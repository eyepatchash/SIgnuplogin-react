import firebase from "firebase/app"
import "firebase/auth"
// export const auth=firebase.auth()
var firebaseconfig ={
    apiKey: "AIzaSyD8xFcWth8A05AD9i18lOJakSkqF47_BGs",
    authDomain: "browser-based-code-editor.firebaseapp.com",
    projectId: "browser-based-code-editor",
    storageBucket: "browser-based-code-editor.appspot.com",
    messagingSenderId: "353891879678",
    appId: "1:353891879678:web:64d452cf8e64684548b3af",
    measurementId: "G-J9ZT6H5CFK"
}

const fire =firebase.initializeApp(firebaseconfig)
export default fire;
export const auth=firebase.auth()