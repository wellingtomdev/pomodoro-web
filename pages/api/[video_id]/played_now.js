const db = require('../../../src/firestore')
const infoMedia = require('../../../src/infoMedia')

async function route(req, res) {
    try {
        const { video_id } = req.query
        const available = await infoMedia.isAvailable(video_id)
        if(!available) {
            res.status(404).json({ error: 'Video not found' })
            return db.setNotAvailable(video_id)
        }
        const result = await db.setPlayedNow(video_id)
        res.json(result)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export default route