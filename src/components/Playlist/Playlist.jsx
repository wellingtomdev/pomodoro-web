import './Playlist.css'
import { useState } from 'react'



function PlaylistTrack(props) {
    const { title, channel,  image } = props
    return (
        <div id='playlist-track'>
            <div id='playlist-track-image'>
                <img src={image} alt='Track Image' />
            </div>
            <div id='playlist-track-info'>
                <h3>{title}</h3>
                <p>{channel}</p>
            </div>
        </div>
    )
}

const Playlist = props => {


    return (
        <>
            <div id='playlist'>
                <div id='playlist-header'>
                    <h1>Playlist</h1>
                </div>

                <div id='playlist-body'>
                    <ul>
                        {props.tracks?.map(track => (
                            <li key={track.id}>
                                <PlaylistTrack {...track} />
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Playlist