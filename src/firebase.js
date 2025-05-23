// firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import secureLocalStorage from "react-secure-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrME2ECtGTjwEYBosN85Ul2fMrFDzHkrs",
    authDomain: "fist-a6079.firebaseapp.com",
    projectId: "fist-a6079",
    storageBucket: "fist-a6079.firebasestorage.app",
    messagingSenderId: "464980683392",
    appId: "1:464980683392:web:c676dd18cd219df1975465",
    measurementId: "G-YMD1Z623TY"
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


getToken(messaging, {
    vapidKey:
        "BLtGWJv822o_sre_S0xpYNnFZS8ietsB4bAnZPlVJg7lft7VzJfcZgj6E96W96iYPOrgwPDC9OhsaIsynUU9Pdc",
})
    .then((currentToken) => {
        if (currentToken) {
            // console.log("Token retrieved:", currentToken);
            secureLocalStorage.setItem("fcmtoken", currentToken)

        } else {
            // console.log(
            //     "No registration token available. Request permission to generate one."
            // );
        }
    })
    .catch((err) => {
        // console.log("An error occurred while retrieving token. ", err);
    });

export { messaging, onMessage };




