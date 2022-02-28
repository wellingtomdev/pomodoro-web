import timerViewManager from  './timerView.js';


function viewManager(){

    let modeStarted = false;

    const body = document.querySelector('body')
    const timerEl = document.querySelector('#timer')
    const titleEl = document.querySelector('title')
    
    const timer = timerViewManager( timerEl )

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

        if(titleEl.innerHTML != newValueFromTitle){
            titleEl.innerHTML = newValueFromTitle
        }
    
    }
    
   
    return {
        start,
        stop,
        timer,
        atualizeTitle,
    }

}

export default viewManager()