import React, {useState} from 'react'
import './App.css';

import Tags from './components/Tags'
import Timer from './components/Timer'
import Controls from './components/Controls'


function timerManager(){

    function getTime(){
        return new Date().getTime()
    }

    let CALLBACK = ()=>{}
    
    let lastIdTimeout = null
    let initTime = null
    let finishTime = null
    
    let timePause = null

    function clear(){

        if(lastIdTimeout){
            clearTimeout(lastIdTimeout)
        }

        initTime = null
        finishTime = null
        timePause = null
        
    }

    function schedule(callback = ()=>{}, time){
        clear()
        CALLBACK = callback
        lastIdTimeout = setTimeout(CALLBACK, time)
        initTime = getTime()
        finishTime = initTime + time
    }
    
    function secondsLeft(){
        if(!finishTime) { return 0 }
        const timeLeft =  finishTime - ( timePause ? timePause : getTime() )
        const seconds = parseInt( timeLeft / 1000 )
        if(seconds < -1){ CALLBACK() }
        return seconds
    }
 
    function stop(){
        timePause = getTime()
        if(lastIdTimeout){
            clearTimeout(lastIdTimeout)
        }
    }

    function play(){
        setTimeout(CALLBACK, finishTime - timePause)
        finishTime += getTime() - timePause 
        timePause = null
    }

    return {
        secondsLeft,
        schedule,
        clear,
        stop,
        play,
    }
  
}

function viewManager(){

  let modeStarted = false;

  const body = document.querySelector('body')
  const titleEl = document.querySelector('title')


  function start(){
      modeStarted = true;
      const attribute = document.createAttribute('started')
      body.attributes.setNamedItem(attribute)
  }
  
  function stop(){
      if(!modeStarted){ return false }
      modeStarted = false
      body.attributes.removeNamedItem('started')
  }

  function atualizeTitle(seconds){

      const newValueFromTitle = seconds ? `Pomodoro - ${parseInt(seconds / 60)}min ${parseInt(seconds % 60)}sec ` : `Pomodoro`

      if(titleEl.innerHTML !== newValueFromTitle){
          titleEl.innerHTML = newValueFromTitle
      }
  
  }
  
 
  return {
      start,
      stop,
      atualizeTitle,
  }

}

const audioEl = document.querySelector('#audioNotification')
const timer = timerManager()

const view = viewManager()
let externSetSecondsLeft = ()=>{}
let atualizeTitle = false

let paused = false;
let mode = 'pause'

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
                // notifyBreak()
                playAudio()
            }, 25 * 60 * 1000)
            view.start()

        }

        function breakTime(){

            mode = 'pause'
            timer.schedule(()=>{
                focus()
                // notifyFocus()
                playAudio()
            }, 5 * 60 * 1000)
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

            timer.clear()
            paused = false
            view.stop()
            values.showButtons('play')

        }

    }

    values.onClick(onClick)

}

setInterval(()=>{
    externSetSecondsLeft(timer.secondsLeft())
    if(mode === 'focus'){
        view.atualizeTitle(timer.secondsLeft())
    }
}, 500)


function App() {

  const [secondsLeft, setSecondsLeft] = useState(0)
  externSetSecondsLeft = setSecondsLeft

  return (
    <div id="display" >
        <Tags />
        <Timer secondsLeft={secondsLeft}/>
        <Controls exportValues={controls}/>
    </div>
  )

}

export default App;



