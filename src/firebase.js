import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore, doc, getDoc, getDocs, setDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsOtN30SI8hxXjzwOq-g3VMy9z2HbO07Y",
    authDomain: "pomodoro-21263.firebaseapp.com",
    projectId: "pomodoro-21263",
    storageBucket: "pomodoro-21263.appspot.com",
    messagingSenderId: "144961947757",
    appId: "1:144961947757:web:ff32f6fa02bad390809764",
    measurementId: "G-R4NLKVMSMS"
}


const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore()


async function getTracks() {
    const collectionRef = await collection(db, `tracks`)
    const docsRef = await getDocs(collectionRef)
    return docsRef.docs.map(doc => doc.data())
}

getTracks().then(tracks => {
    console.log(tracks)
}).catch(err => {
    console.log(err)
})


export default {
    getTracks,
}