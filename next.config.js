
function initializeFirebase() {

    const fs = require('fs')

    if (!fs.existsSync('./serviceAccountKey.json')) {
        const credentials = process.env.SERVICE_ACCOUNT_KEY
        fs.writeFileSync('./serviceAccountKey.json', credentials)
    }

    const serviceAccount = require('./serviceAccountKey.json');

    const { initializeApp, cert } = require('firebase-admin/app')
    const { getFirestore } = require('firebase-admin/firestore')

    initializeApp({ credential: cert(serviceAccount) })

    return {
        firestore: getFirestore()
    }
    
}

global.firebase = initializeFirebase()


const nextConfig = {
    images: {
        domains: ['yt3.ggpht.com'],
    },
}

module.exports = nextConfig