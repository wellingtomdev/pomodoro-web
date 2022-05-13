

const Timer = props => {

    const {secondsLeft} = props

    return (
        <div id="timer">
            <div className="camp">
                <div className='time' id="minute">{Math.floor(secondsLeft / 60) }</div>
                <div className="unid">min</div>
            </div>
            <div className="camp">
                <div className='time' id="second">{(secondsLeft % 60)}</div>
                <div className="unid">sec</div>
            </div>
        </div>
    )
}

export default Timer