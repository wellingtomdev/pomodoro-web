

function firebaseCredentials(){
    try {
        const fs = require('fs')
        const filepath = './serviceAccountKey.json'
        if (!fs.existsSync(filepath)) {
            fs.writeFileSync(filepath, process.env.SERVICE_ACCOUNT_KEY)
        }
        return require(filepath)
    } catch (error) {
        return false
    }
}

const credentials = firebaseCredentials()

const nextConfig = {
    images: {
        domains: ['yt3.ggpht.com'],
    },
    env: {
        FIREBASE_CREDENTIALS: credentials,
    },
}


module.exports = nextConfig