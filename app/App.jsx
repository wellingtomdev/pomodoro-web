import React, { useState, useEffect } from 'react'

import If from './components/If'
import Display from './components/Display'
import Player from './components/Player'
import Playlist from './components/Playlist'
import { BackSvg, MusicSvg } from './components/Icons'

import database from './modules/firebase'
import api from './modules/api'


function PlaylistBottom(props) {
  const {opened, setOpened} = props
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
  const [tracks, setTracks] = useState([])

  useEffect(async () => {
    setTracks(await api.getTracks())
  }, [])

  return (
    <>

      {/* <If condition={!opened}> */}
        <Display blurred={opened}/>
      {/* </If> */}

      <If condition={opened}>
        <Playlist tracks={tracks} setSelected={track => {
          setOpened(false)
          setSelectedTrack(track)
          }}/>
      </If>

      <Player
        track={selectedTrack}
        setTrack={setSelectedTrack}
      />

      <PlaylistBottom {...{opened, setOpened}}/>

    </>
  )

}

export default App;



