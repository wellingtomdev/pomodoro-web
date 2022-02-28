function timerManager(timerEl){
    
    const minuteEl = timerEl.querySelector('#minute')
    const secondEl = timerEl.querySelector('#second')

    let getterSeconds = ()=>{}
    
    function setGetterTimeInSeconds(callback){
    
        if(typeof callback != 'function'){ throw 'callback not is a function' }
        getterSeconds = callback
    
    }

    function setNumberFromElement(element, number){
        if(number == parseInt(element.innerHTML)){ return false}
        element.innerHTML = number;
    }

    function showTime(){

        const seconds = getterSeconds() || 60 * 25

        setNumberFromElement(minuteEl, parseInt( seconds / 60 ) )
        setNumberFromElement(secondEl, seconds % 60)

    }

    setInterval(() => {
        showTime();
    }, 200);

    return {
        setGetterTimeInSeconds,
    }

}

export default timerManager