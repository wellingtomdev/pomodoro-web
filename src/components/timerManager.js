export default timerManager()

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
            lastIdTimeout = null
        }
    }

    function play(){
        lastIdTimeout = setTimeout(CALLBACK, finishTime - timePause)
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