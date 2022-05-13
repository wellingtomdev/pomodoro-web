const db = require('../../../src/firestore')

async function route(req, res) {
    try {
        const { video_id } = req.query
        const result = await db.setPlayedNow(video_id)
        res.json(result)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export default route