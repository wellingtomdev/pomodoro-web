const infoMedia = require('../../../src/infoMedia')
const db = require('../../../src/firestore')


async function route(req, res) {
    try {
        const { video_id } = req.query
        const track = await infoMedia.getAudioTrack(video_id)
        db.setTrack(video_id, track)
        res.json(track)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export default route