import { useState } from 'react'
import api from '../modules/api'
import If from './If'

import youtubeLink from '../modules/youtubeLink'

function IncludeTrack(props) {

    const { setSelected = () => {}, refreshTracks } = props

    const [trackInfo, setTrackInfo] = useState(undefined)

    async function changeText(text) {
        try {
            const info = youtubeLink.getBasicInfoByLink(text)
            if (!info) { throw new Error('Invalid link') }

            const { video_id } = info
            const track = await api.getTrack(video_id)

            const merged = { ...info, ...track }
            console.log(merged)
            setTrackInfo(merged)

        } catch (error) {
            return setTrackInfo()
        }
    }

    async function onInclude() {
        try {
            if (!trackInfo) { return }
            const newTrack = await api.addTrack(trackInfo.video_id)
            setSelected(newTrack)
            refreshTracks()
        } catch (error) {
            alert('Error: ' + error.message)
        }
    }

    return (
        <>
            <div className='include-track'>
                <div className='input'>
                    <p className='title'>Adicione uma música que deseje ouvir</p>
                    <input
                        className='video-link'
                        type="url"
                        placeholder='Link do YouTube'
                        onChange={e => changeText(e.target.value)}
                    />
                </div>

                <If condition={trackInfo}>
                    <div className='view'>
                        <h3 className='adjustText'>{trackInfo?.title}</h3>
                        <h4 className='adjustText'>{trackInfo?.channel}</h4>
                        <img
                            src={trackInfo?.thumbnails.mqdefault}
                            alt={trackInfo?.title}
                        />
                    </div>
                    <button
                        className='include-button'
                        onClick={onInclude}
                    >Incluir</button>
                </If>
            </div>
        </>
    )
}


export default IncludeTrack