
import view from './viewManager.js'
import timer from './timerManager.js'
import { notifyBreak, notifyFocus } from './notification'


function managerPreferencies(){

    function times(){
        const value = localStorage.getItem('times')
        if(value){
            return JSON.parse(value)
        }
    }


    function setTimes({focusTime, breakTime}){
        return localStorage.setItem('times', JSON.stringify({focusTime, breakTime}))
    }

    return {
        setTimes,
        times,
    }

}

const preferencies = managerPreferencies()


const audioEl = document.querySelector('#audioNotification')


let paused = false;
let mode = 'pause'

const oneMinuteInSeconds = 60
const focusSeconds = () => oneMinuteInSeconds * (preferencies.times()?.focusTime || 25)
const breakSeconds = () => oneMinuteInSeconds * (preferencies.times()?.breakTime || 5)

function playAudio(){
    audioEl.play()
}


function focus(){

    mode = 'focus'
    timer.schedule(()=>{
        breakTime()
        notifyBreak()
        playAudio()
    }, focusSeconds() * 1000)
    view.start()

}

function breakTime(){

    mode = 'pause'
    timer.schedule(()=>{
        focus()
        notifyFocus()
        playAudio()
    }, breakSeconds() * 1000)
    view.stop()
    
}

function pause(){

    timer.stop()
    paused = true
   
    
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

    paused = false

}

function reset(){

    mode = 'pause'
    timer.clear()
    paused = false
    view.stop()
}

function edit(){
    console.log('edit')
}



function focusInSeconds(){
    return focusSeconds()
}

function cancel(){
    console.log('cancel')
}

function save({focusTime, breakTime}){
    preferencies.setTimes({focusTime, breakTime});

}


const methods = {
    buttonMethods:{
        play,
        pause,
        reset,
        edit,
        cancel,
        save,
    },
    focusInSeconds,
    preferencies,
    timer,
    view,
}

export default methods