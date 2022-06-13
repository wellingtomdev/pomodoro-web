import '../public/styles/global.css'
import '../public/styles/App.css'
import '../public/styles/Player.css'
import '../public/styles/Playlist.css'
import '../public/styles/TimerSelect.css'

import Analytics from '../src/Analytics'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}

