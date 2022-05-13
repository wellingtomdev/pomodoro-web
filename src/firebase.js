
function initializeFirebase() {
    console.log('initializeFirebase')
    const { initializeApp, cert } = require('firebase-admin/app')
    return initializeApp({ credential: cert(process.env.FIREBASE_CREDENTIALS) })
    
}

const { getFirestore } = require('firebase-admin/firestore')


function initied(){
    try {
        const { getApp } = require('firebase-admin/app')
        getApp()
        return true
    } catch (error) {
        return false
    }
}

function firestore(){
    if(!initied()){
        initializeFirebase()
    }
    return getFirestore()
}


module.exports = {
    initializeFirebase,
    firestore,
}