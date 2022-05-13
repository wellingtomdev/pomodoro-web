export default viewManager()

function viewManager(){

    let modeStarted = false;
  
    if (typeof window === "undefined") { return }
    
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