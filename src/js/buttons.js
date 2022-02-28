function buttonsManager(){

    const buttons = {
        play: document.querySelector('#play-c'),
        reset: document.querySelector('#reset-c'),
        pause: document.querySelector('#pause-c'),
    }

    if(!buttons.play || !buttons.reset || !buttons.pause){ throw 'intern error' }

    function showBottons(...names){

        Object.keys(buttons).forEach( key => {
    
            if(names.includes(key)){
                buttons[key].style.display = ''
                return
            }

            buttons[key].style.display = 'none'

        })

    }

    function addListener(name, callback = ()=>{}){

        if(!buttons[name]){ return false }

        buttons[name].addEventListener('click', callback )

    }


    return {
        showBottons,
        addListener,
    }

}

export default buttonsManager()