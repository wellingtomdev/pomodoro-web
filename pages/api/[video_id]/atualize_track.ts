import infoMedia from '../../../src/infoMedia'
import db from '../../../src/firestore'


async function route(req, res) {
    try {
        const { video_id } = req.query
        const track = await infoMedia.getTrack(video_id)
        db.atulizeTrack(track)
        res.json(track)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export default route