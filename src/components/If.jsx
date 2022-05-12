const If = props => {
    const {condition, children} = props
    return condition ? children : null
}

export default If