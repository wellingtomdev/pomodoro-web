const db = require('../../src/firestore')


export default async function(req, res){
    try {
        const tracks = await db.getTracks()
        res.status(200).json(tracks)
    } catch (error) {
        res.status(500).json({ error })
    }
}

