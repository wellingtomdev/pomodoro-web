const ytdl = require('ytdl-core')





function getBestAudioFormat(formats) {
    function isOnlyAudio(format) { return format.hasAudio && !format.hasVideo }
    const audioFormats = formats.filter(isOnlyAudio)
    const formatSelected = audioFormats.find(format => format.audioQuality === 'AUDIO_QUALITY_MEDIUM')
    return formatSelected
}

function formatTrack(videoDetails, format) {
    return ({
        src: format.url,
        embed: videoDetails.embed,
        video_id: videoDetails.videoId,
        title: videoDetails.title,
        channel: videoDetails.author.name,
        video_url: videoDetails.video_url,
        isLive: videoDetails.isLiveContent,
        channel_url: videoDetails.author.channel_url,
        channel_image: videoDetails.author.thumbnails[0].url,
    })
}

function ref(video_id){
    return `https://www.youtube.com/watch?v=${video_id}`
}

async function getInfo(video_id) {
    return ytdl.getInfo(ref(video_id))
}

async function formats(video_id) {
    const info = await getInfo(video_id)
    return info.formats
}

async function getAudioTrack(video_id) {
    const info = await getInfo(video_id)
    const format = getBestAudioFormat(info.formats)
    const track = formatTrack(info.videoDetails, format)
    return track
}




module.exports = {
    getInfo,
    formats,
    getAudioTrack,
}