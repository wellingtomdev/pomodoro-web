import React, { useState } from 'react'

import If from './components/If'
import Display from './components/Display'
import Player from './components/Player'
import Playlist from './components/Playlist';


import { faker } from '@faker-js/faker'


function generateTracks(amount) {
  const tracks = []
  for (let i = 0; i < amount; i++) {
    const id = i
    const title = faker.name.findName()
    const channel = faker.name.firstName(title)
    const image = faker.image.avatar(title)
    const src = 'https://rr4---sn-gpv7dn7k.googlevideo.com/videoplayback?expire=1652327881&ei=aTF8YvzrK83NwgSJvraYCA&ip=177.131.168.245&id=o-AGcyQ9QoVDRDwhxdM6Xb5hvGbYso9DoNqKXnU44SXkta&itag=249&source=youtube&requiressl=yes&spc=4ocVC15xFt8ItRXp8ipCPQWTFvNh&vprv=1&mime=audio%2Fwebm&ns=Y1FjWbLV8UHuM7O8ppJ-YQIG&gir=yes&clen=94577014&dur=14200.881&lmt=1651944150460117&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=4532434&n=pQCZKMJqAyjD3A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIfGVzJS_e0Z-mFD-TNzP2okiG8BcU64jO73ovH5ZZ2aAiAYDMAKk-38iTogOqDxSz4LYsGtOZXc3BFj6oTlYmJpDg%3D%3D&redirect_counter=1&cm2rm=sn-n0hpjput-bpbs7s&req_id=d19506325fcda3ee&cms_redirect=yes&cmsv=e&mh=Vt&mm=29&mn=sn-gpv7dn7k&ms=rdu&mt=1652306215&mv=m&mvi=4&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgPjszYG_eu1BL08QhUAOAu5anIQdUfyIiz5mOie3wVvkCIQCJXBx3O7C8NSGzHvEJ4AgQOzETC_nrP7m-3qpCvYAVuQ%3D%3D'
    tracks.push({ id, title, channel, image, src })
  }
  return tracks
}

const tracks = generateTracks(10)



function MusicSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H24V24H0V0Z" fill="none" />
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#FFC107" />
      <path d="M12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z" fill="#FFC107" />
      <path d="M12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13Z" fill="#FFC107" />
      <path d="M12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17Z" fill="#FFC107" />
    </svg>
  )
}

function BackSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H24V24H0V0Z" fill="none" />
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#FFC107" />
      <path d="M12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z" fill="#FFC107" />
      <path d="M12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13Z" fill="#FFC107" />
      <path d="M12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17Z" fill="#FFC107" />
    </svg>
  )
}


function App() {

  const [opened, setOpened] = useState(false)
  const [selectedTrack, setSelectedTrack] = useState(tracks[0])

  return (
    <>
      <div className='playlist-bot'>
        <div className='bot' onClick={_ => setOpened(!opened)} >
          {opened ? <BackSvg /> : <MusicSvg />}
        </div>
      </div>
      
      <If condition={opened}>
        <Playlist tracks={tracks} />
      </If>
      <If condition={!opened}>
        <Display />
      </If>

      <Player src={selectedTrack.src}/>
    </>
  )

}

export default App;



