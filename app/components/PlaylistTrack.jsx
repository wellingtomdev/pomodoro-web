import Image from 'next/image'
import api from '../modules/api'

async function atualizeImage(errorEvent, videoId){
    console.log('atualizeImage')
    const result = await api.atualizeTrack(videoId)
    errorEvent.target.src = result.channel_image
}

function PlaylistTrack(props){
    const { track, onClick = () => { } } = props
    const { title, channel, channel_image, video_id } = track
    const isAvailable = track?.available == undefined ? true : track?.available

    return (
        <li key={video_id} onClick={_ => isAvailable ? onClick(track) : () => { }} >
            <div id='playlist-track' className={!isAvailable ? 'track-disabled' : ''}>
                <div id='playlist-track-image'>
                    <Image
                        width={50}
                        height={50}
                        src={channel_image}
                        alt={channel}
                        onError={e => atualizeImage(e, video_id)}
                    />
                </div>
                <div id='playlist-track-info'>
                    <h3 className='adjustText'>{title}</h3>
                    <p className='adjustText'>{channel}</p>
                </div>
            </div>
        </li>
    )
}


export default PlaylistTrack