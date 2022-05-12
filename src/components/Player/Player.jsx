import './Player.css'


const Player = props => {
    const { src, title, } = props
    const audio = new Audio(src)
    return (
        <div id='audio-player'>
            <div id='audio-player-title'>{title}</div>
            <div id='audio-player-controls'>
                <div id='audio-player-controls-play' onClick={_ => audio.play()}>
                   play
                </div>
            </div>
        </div>
    )
}

export default Player