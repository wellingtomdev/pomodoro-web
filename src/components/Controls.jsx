import { useState } from "react"

function Bot({text, id, onClick}) {
    return (
        <div className="bot" id={id} onClick={onClick}>{text}</div>
    )
}

let onclick = ()=>{}

const Controls = props => {

    props.exportValues({
        showButtons,
        onClick,
    })

    function onClick(callback){
        onclick = callback
    }

    function showButtons(...names){
        Object.keys(buttonsSetters).forEach( key => {
            const setter = buttonsSetters[key]
            if(names.includes(key)){
                setter(true)
                return
            }
            setter(false)
        })
    }

    const [reset, setReset] = useState(false)
    const [pause, setPause] = useState(false)
    const [play, setPlay] = useState(true)


    const buttonsSetters = {
        reset: setReset,
        pause: setPause,
        play: setPlay,
    }

    return (
        <div id='controls'>
            {reset ? <Bot text='Reset' id='reset-c' onClick={() => { onclick('reset') }}/> : false}
            {pause ? <Bot text='Pause' id='pause-c' onClick={() => { onclick('pause') }}/> : false}
            {play ? <Bot text='Play' id='play-c' onClick={() => { onclick('play') }}/> : false}
        </div>
    )
}

export default Controls