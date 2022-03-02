import './TimerSelect.css'

import { useState } from 'react' 

function Arrow(props){

    const direction = props.direction === undefined ? true : props.direction

    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none" style={{transform: `rotate(${direction ? 0 : 180}deg)` }}>
        <path d="M9.26545 0.795178C9.66137 0.366579 10.3386 0.366579 10.7346 0.795177L18.8417 9.57145C19.4334 10.2119 18.9791 11.25 18.1072 11.25H1.89283C1.0209 11.25 0.566624 10.2119 1.15827 9.57145L9.26545 0.795178Z" fill="#333333"/>
    </svg>

}

function Counter(props){

    const [time, setTime] = useState(props.initial || 0)
    
    function sum(n){
        if(time + n > 0){
            setTime(time + n)
            props.modifyNewValue(time+ n)
        }
    }

    return (
        <div className='counter'>
            <div onClick={()=>sum(+1)} className='arrow-button'><Arrow direction={true}/></div>
            <div className='time'>{time}</div>
            <div onClick={()=>sum(-1)} className='arrow-button'><Arrow direction={false}/></div>
        </div>
    )

}


const TimerSelect = props => {

    let focusTime = props.initialFocusTime || 25
    let breakTime = props.initialBreakTime || 5

    const externGetTime = props.getTime

    externGetTime(getTime)

    function getTime(){
        return {focusTime, breakTime}
    }

    return (
        <>
            <div id="timer-select">
                <h2 style={{color:'#555', marginBottom:'30px',}}>Time configuration</h2>
                <div id='tags'>
                    <div>Focus</div>
                    <div>break</div>
                </div>
                <div className='display'>
                    <div className="camp">
                        <Counter
                            initial={focusTime}
                            modifyNewValue={value=>{focusTime = value}}
                        />
                        <div className="unid">min</div>
                    </div>
                    <div className="camp">
                        <Counter
                            initial={breakTime}
                            modifyNewValue={value=>{breakTime = value}}
                        />
                        <div className="unid">min</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimerSelect