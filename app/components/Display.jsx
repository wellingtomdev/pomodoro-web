import React, { useState } from 'react'

import Tags from './Tags'
import Timer from './Timer'
import TimeSelect from './TimeSelect'
import Controls from './Controls'

import methods from '../modules/methods'

const { timer, view, preferencies, buttonMethods, focusInSeconds } = methods

let page = 'home'

let externSetSecondsLeft = () => { }

setInterval(() => {

    if (page === 'focus') {
        const secondsLeft = timer.secondsLeft()
        externSetSecondsLeft((secondsLeft === 0 && page === 'pause') ? focusInSeconds() : secondsLeft)
        view?.atualizeTitle(secondsLeft)
        return
    }
    if (page !== 'pause') {
        externSetSecondsLeft(focusInSeconds())
    }
    if (page !== 'focus') {
        view?.atualizeTitle(0)
    }

}, 500)

let externSetButtonsSetup = () => { }

function esbs() { externSetButtonsSetup(pageButtons[page]) }

const pageButtons = {
    home: { edit: () => { page = 'edit'; esbs(); buttonMethods.edit() }, play: () => { page = 'focus'; esbs(); buttonMethods.play() } },
    edit: { cancel: () => { page = 'home'; esbs(); buttonMethods.cancel() }, save: () => { page = 'home'; esbs(); buttonMethods.save(getTime()) } },
    focus: { reset: () => { page = 'home'; esbs(); buttonMethods.reset() }, pause: () => { page = 'pause'; esbs(); buttonMethods.pause() } },
    pause: { reset: () => { page = 'home'; esbs(); buttonMethods.reset() }, play: () => { page = 'focus'; esbs(); buttonMethods.play() } },
}

let getTime = () => { }

function Display(props) {

    const { blurred } = props

    const [secondsLeft, setSecondsLeft] = useState(focusInSeconds())
    externSetSecondsLeft = setSecondsLeft

    const [buttonsSetup, setButtonsSetup] = useState(pageButtons[page])
    externSetButtonsSetup = setButtonsSetup

    return (
        <div id='container' className={blurred ? 'blurred' : ''}>
            <Tags />
            <div id="display" >
                {page !== 'edit' ?
                    <Timer secondsLeft={secondsLeft} />
                    :
                    <TimeSelect
                        getTime={value => getTime = value}
                        initialFocusTime={preferencies.times()?.focusTime}
                        initialBreakTime={preferencies.times()?.breakTime}
                    />
                }

            </div>
            <Controls setup={buttonsSetup} />
        </div>
    )

}

export default Display;



