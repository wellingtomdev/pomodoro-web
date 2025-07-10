import ytdl from '@distube/ytdl-core'

function ref(video_id: string) {
    return `https://www.youtube.com/watch?v=${video_id}`
}

function formatTrack(info: ytdl.videoInfo) {
    return ({
        video_id: info.videoDetails.videoId,
        title: info.videoDetails.title,
        channel: info.videoDetails.author.name,
        channel_image: info.videoDetails.author.thumbnails ? info.videoDetails.author.thumbnails[0].url : '',
    })
}

async function getInfo(video_id: string) {
    return ytdl.getBasicInfo(ref(video_id))
}

async function isAvailable(video_id: string) {
    const info = await getInfo(video_id)
    return info.formats.length > 0
}

async function getTrack(video_id: string) {
    const info = await getInfo(video_id)
    const track = formatTrack(info)
    return track
}

export default {
    getInfo,
    getTrack,
    isAvailable,
}