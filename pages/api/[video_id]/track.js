const infoMedia = require('../../../src/infoMedia')


async function route(req, res) {
    try {
        const { video_id } = req.query
        const track = await infoMedia.getTrack(video_id)
        res.json(track)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export default route