import buttons from './buttons.js'
import view from './view.js';
import timer from './timer.js'
import { notifyBreak, notifyFocus } from './notification.js'
import { playAudio } from './audio.js'

let paused = false;
let mode = 'pause'

function focus(){

    mode = 'focus'
    timer.schedule(()=>{
        pause()
        notifyBreak()
        playAudio()
    }, 25 * 60 * 1000)
    view.timer.setGetterTimeInSeconds(timer.secondsLeft)
    view.start()

}

function pause(){

    mode = 'pause'
    timer.schedule(()=>{
        focus()
        notifyFocus()
        playAudio()
    }, 5 * 60 * 1000)
    view.timer.setGetterTimeInSeconds(timer.secondsLeft)
    view.stop()

}

function play(){

    
    if(paused){
        timer.play()
        if(mode == 'focus'){
            view.start()
        }
    }else{
        focus()
    }
    
    buttons.showBottons('reset','pause')

    paused = false

}

function reset(){

    timer.clear()
    paused = false
    view.stop()
    buttons.showBottons('play')

}

function breakTime(){

    timer.stop()
    paused = true
    buttons.showBottons('reset','play')

    if(mode == 'focus'){
        view.stop()
    }
    
}

setInterval(() => { view.atualizeTitle(timer.secondsLeft()) }, 1000);

buttons.addListener('play', play)

buttons.addListener('reset', reset)

buttons.addListener('pause', breakTime)
