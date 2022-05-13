const infoMedia = require('../../../src/infoMedia')


async function route(req, res) {
    try {
        const { video_id } = req.query
        const info = await infoMedia.getInfo(video_id)
        res.json(info)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export default route