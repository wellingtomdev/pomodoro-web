import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
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
        <title>Pomodoro</title>
      </Head>
      <body translate='no'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}