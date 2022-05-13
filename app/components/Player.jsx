import api from '../modules/api'
import youtubeLink from '../modules/youtubeLink'

import Image from 'next/image'

const Player = props => {

    const { track, setTrack = () => { } } = props

    if (!track) { return null }

    const { video_id, title, channel_image, channel } = track

    const embed = youtubeLink.models.embed(video_id)

    return (
        <>
            <div id='audio-player'>
                <div className='media_informations'>
                    <div className='channel_image'>
                        <Image
                            width={40}
                            height={40}
                            src={channel_image}
                            alt={channel}
                        />
                    </div>
                    <div className='names'>
                        <h3 className='adjustText'>{title}</h3>
                        <h4 className='adjustText'>{channel}</h4>
                    </div>
                </div>
                <div className='media_player'>
                    {/* <div className='player_controls'>
                        <div className='loop buttom'>
                            Loop
                        </div>
                        <div className='loop buttom'>
                            Next
                        </div>
                    </div> */}
                    <iframe
                        src={`https://www.youtube.com${embed}?autoplay=1&rel=0&loop=1&playlist=${video_id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </>
    )
}

export default Player