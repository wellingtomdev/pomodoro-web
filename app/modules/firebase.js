import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics"

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
const analytics = getAnalytics(app)

function event(name, params){
    return logEvent(analytics, name, params)
}

export { event }

export default {
    analytics,
    event,
}