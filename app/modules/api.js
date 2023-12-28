import axios from 'axios'

const url_api = `/api`


async function atualizeTrack(video_id){
    const response = await axios.get(`${url_api}/${video_id}/atualize_track`)
    return response.data
}

async function getMostPlayed(){
    const response = await axios.get(`${url_api}/mostPlayed`)
    return response.data
}

async function getMostRecent(){
    const response = await axios.get(`${url_api}/mostRecent`)
    return response.data
}

async function getAllTracks(){
    const response = await axios.get(`${url_api}/allTracks`)
    return response.data
}

async function getTrack(video_id){
    const response = await axios.get(`${url_api}/${video_id}/track`)
    return response.data
}

async function addTrack(video_id){
    const response = await axios.get(`${url_api}/${video_id}/add_track`)
    return response.data
}

async function playedNow(video_id){
    const response = await axios.get(`${url_api}/${video_id}/played_now`)
    return response.data
}

export default {
    atualizeTrack,
    playedNow,
    getMostPlayed,
    getMostRecent,
    getAllTracks,
    getTrack,
    addTrack,
}