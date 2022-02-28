
const Controls = props => {
    return (
        <div id='controls'>
            <div className="bot" id='reset-c' style={{display:'none'}}>Reset</div>
            <div className="bot" id='pause-c' style={{display:'none'}}>Pause</div>
            <div className="bot" id='play-c'>Play</div>
        </div>
    )
}

export default Controls