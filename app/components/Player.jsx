import api from '../modules/api'

import Image from 'next/image'

const Player = props => {

    const { track, setTrack = () => { } } = props

    if (!track) { return null }

    const { title, channel_image, video_id, isLive, channel, embed, channel_url, video_url, src } = track

    console.log('track', src)

    async function onError() {
        const newTrackValues = await api.atualizeTrack(video_id)
        setTrack(newTrackValues)
    }

    return (
        <>
            <div id='audio-player' className={isLive ? 'isLive' : ''}>
                <div className='media_informations'>
                    {/* <a href={channel_url} target="_blank" rel="noopener noreferrer"> */}
                    <div className='channel_image'>
                        <Image
                            width={40}
                            height={40}
                            src={channel_image}
                            alt={channel}
                        />
                    </div>
                    {/* </a> */}
                    <div>
                        {/* <a href={video_url} target="_blank" rel="noopener noreferrer"> */}
                        <h3>{title}</h3>
                        {/* </a>
                        <a href={channel_url} target="_blank" rel="noopener noreferrer"> */}
                        <h4>{channel}</h4>
                        {/* </a> */}
                    </div>
                </div>
                <div className='media_player'>
                    {isLive ? (
                        <div className='live'>
                            <iframe
                                src={embed.iframeUrl}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>
                    ) : (
                        <audio
                            src={src}
                            onError={onError}
                            controls
                            autoPlay
                            controlsList='nodownload'
                        />
                    )}

                </div>
            </div>
        </>
    )
}

export default Player