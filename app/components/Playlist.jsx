import { useState } from 'react'

import Image from 'next/image'


function PlaylistTrack(props) {
    const { track, onClick = () => { } } = props
    const { title, channel, channel_image, id } = track

    return (
        <li key={id} onClick={_ => onClick(track)}>
            <div id='playlist-track'>
                <div id='playlist-track-image'>

                    <Image
                        width={50}
                        height={50}
                        src={channel_image}
                        alt={channel}
                    />
                </div>
                <div id='playlist-track-info'>
                    <h3>{title}</h3>
                    <p>{channel}</p>
                </div>
            </div>
        </li>
    )
}


const Playlist = props => {

    const { tracks, setSelected } = props
    const trackElements = tracks?.map((track, key) => <PlaylistTrack key={key} track={track} onClick={setSelected} />)

    return (
        <>
            <div id='playlist'>
                <div id='playlist-header'>
                    <h1>Playlist</h1>
                </div>

                <div id='playlist-body'>
                    <ul>
                        {trackElements}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Playlist