import React, {useState} from 'react'

import Tags from './Tags'
import Timer from './Timer'
import Controls from './Controls'

import view from './viewManager.js'
import timer from './timerManager.js'
import { notifyBreak, notifyFocus } from './notification'


const audioEl = document.querySelector('#audioNotification')

let externSetSecondsLeft = ()=>{}

let paused = false;
let mode = 'pause'

const oneMinuteInSeconds = 60
const focusSeconds = oneMinuteInSeconds * 25
const breakSeconds = oneMinuteInSeconds * 5

function playAudio(){
    audioEl.play()
}

function controls(values){
    

    function onClick(buttonName){

        if(buttonName === 'play'){
            return play()
        }

        if(buttonName === 'pause'){
        return pause()
        }

        if(buttonName === 'reset'){
            return reset()
        }
    

        function focus(){

            mode = 'focus'
            timer.schedule(()=>{
                breakTime()
                notifyBreak()
                playAudio()
            }, focusSeconds * 1000)
            view.start()

        }

        function breakTime(){

            mode = 'pause'
            timer.schedule(()=>{
                focus()
                notifyFocus()
                playAudio()
            }, breakSeconds * 1000)
            view.stop()
            
        }

        function pause(){

            timer.stop()
            paused = true
            values.showButtons('reset','play')
            
            
            if(mode === 'focus'){
                view.stop()
            }

        }

        function play(){

            if(paused){ 
                timer.play()
                if(mode === 'focus'){
                    view.start()
                }
            }else{
                focus()
            }
            
            values.showButtons('reset','pause')

            paused = false

        }

        function reset(){

            mode = 'pause'
            timer.clear()
            paused = false
            view.stop()
            values.showButtons('play')

        }

    }

    values.onClick(onClick)

}

setInterval(()=>{
    const secondsLeft = timer.secondsLeft()
    externSetSecondsLeft((secondsLeft === 0 && mode === 'pause') ? focusSeconds : secondsLeft)
    if(mode === 'focus'){
        view.atualizeTitle(secondsLeft)
    }
}, 500)


function Display() {

  const [secondsLeft, setSecondsLeft] = useState(focusSeconds)
  externSetSecondsLeft = setSecondsLeft

  return (
    <div id="display" >
        <Tags />
        <Timer secondsLeft={secondsLeft}/>
        <Controls exportValues={controls}/>
    </div>
  )

}

export default Display;



