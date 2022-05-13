import axios from 'axios'

const url_api = `/api`


async function atualizeTrack(videoId){
    const response = await axios.get(`${url_api}/${videoId}/atualize_track`)
    return response.data
}

async function getTracks(){
    const response = await axios.get(`${url_api}/tracks`)
    return response.data
}


export default {
    atualizeTrack,
    getTracks,
}