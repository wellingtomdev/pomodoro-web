import '../public/styles/global.css'
import '../public/styles/App.css'
import '../public/styles/Player.css'
import '../public/styles/Playlist.css'
import '../public/styles/TimerSelect.css'


import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <BaseHtml>
      <Component {...pageProps} />
    </BaseHtml>
  )
}

function BaseHtml(props) {
  return (
    <>

      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/tomato.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Pomodoro app, um timer para te auxiliar no foco contínuo no trabalho, estudo, leitura e qualquer outra tarefa que necessite de gerenciamento de tempo." />
        <meta name="author" content="Wellington Mesquita" />
        <meta name="creator" content="Wellington Mesquita" />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="wellingtomdev2022" />
        <meta name="generator" content="vscode" />
        <meta name="rating" content="general" />
        <meta name="keywords" content="pomodoro, timer, app, focus, foco" />
        <title>Timer Pomodoro</title>
      </Head>
      <body translate="no">
        {props.children}
      </body>

    </>
  )
}