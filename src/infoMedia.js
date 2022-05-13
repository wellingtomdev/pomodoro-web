const ytdl = require('ytdl-core')

function ref(video_id){
    return `https://www.youtube.com/watch?v=${video_id}`
}


function formatTrack(videoDetails) {
    return ({
        video_id: videoDetails.videoId,
        title: videoDetails.title,
        channel: videoDetails.author.name,
        channel_image: videoDetails.author.thumbnails[0].url,
    })
}


async function getInfo(video_id) {
    return ytdl.getInfo(ref(video_id))
}

async function getTrack(video_id) {
    const info = await getInfo(video_id)
    const track = formatTrack(info.videoDetails)
    return track
}

module.exports = {
    getInfo,
    getTrack,
}