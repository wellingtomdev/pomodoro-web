
function Bot({text, id, onClick}) {
    return (
        <div className="bot" id={id} onClick={onClick}>{text}</div>
    )
}


function firstUpper(str) {
    return str[0].toUpperCase() + str.slice(1)
}

const Controls = props => {

    const buttons = {...props.setup}
    const buttonNames = Object.keys(buttons)

    const buttonComponents = buttonNames.map(name => {
        return <Bot key={name} text={firstUpper(name)} id={`${name}-c`} onClick={buttons[name]}/>
    })


    return (
        <div id='controls'>
            {buttonComponents}
        </div>
    )
}

export default Controls