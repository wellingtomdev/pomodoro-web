import Image from 'next/image'

function PlaylistTrack(props){
    const { track, onClick = () => { } } = props
    const { title, channel, channel_image, id } = track
    const isAvailable = track?.available == undefined ? true : track?.available

    return (
        <li key={id} onClick={_ => isAvailable ? onClick(track) : () => { }} >
            <div id='playlist-track' className={!isAvailable ? 'track-disabled' : ''}>
                <div id='playlist-track-image'>
                    <Image
                        width={50}
                        height={50}
                        src={channel_image}
                        alt={channel}
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