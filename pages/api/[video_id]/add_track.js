const db = require('../../../src/firestore')
const infoMedia = require('../../../src/infoMedia')

async function route(req, res) {
    try {
        const { video_id } = req.query
        const [storedTrack, doc] = await db.getTrack(video_id)
        if(storedTrack != undefined) {
            res.status(200).json(storedTrack)
        }
        const track = await infoMedia.getTrack(video_id)
        await db.addTrack(track)
        res.json(track)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export default route