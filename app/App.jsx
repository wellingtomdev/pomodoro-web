import React, { useState, useEffect } from 'react'

import If from './components/If'
import Display from './components/Display'
import Player from './components/Player'
import Playlist from './components/Playlist'
import { BackSvg, MusicSvg } from './components/Icons'

// import { event } from './modules/firebase'
import api from './modules/api'


function PlaylistButtom(props) {
    const { opened, setOpened } = props
    return (
        <div className='playlist-bot'>
            <div className='bot' onClick={_ => setOpened(!opened)} >
                {opened ? <BackSvg /> : <MusicSvg />}
            </div>
        </div>
    )
}


function App() {

    const [opened, setOpened] = useState(false)
    const [selectedTrack, setSelectedTrack] = useState(undefined)
    const [mostPlayed, setMostPlayed] = useState([])
    const [mostRecent, setMostRecent] = useState([])
    const [allTracks, setAllTracks] = useState([])

    useEffect(refreshTracks, [])

    async function refreshTracks() {
        const [mostPlayed, mostRecent, allTracks] = await Promise.all([
            api.getMostPlayed(),
            api.getMostRecent(),
            api.getAllTracks()
        ])
        setMostPlayed(mostPlayed)
        setMostRecent(mostRecent)
        setAllTracks(allTracks)
    }

    return (
        <>
            <Display blurred={opened} />
            <If condition={opened}>
                <Playlist
                    mostPlayed={mostPlayed}
                    mostRecent={mostRecent}
                    allTracks={allTracks}
                    refreshTracks={refreshTracks}
                    setSelected={track => {
                        if (track.video_id == selectedTrack?.video_id) { return }
                        setOpened(false)
                        setSelectedTrack(track)
                        api.playedNow(track.video_id)
                    }}
                />

            </If>
            <Player
                track={selectedTrack}
                setTrack={setSelectedTrack}
            />
            <PlaylistButtom {...{ opened, setOpened }} />
        </>
    )

}

export default App;



