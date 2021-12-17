const Button = ({color,text,onClick}) => {
    return (
            <button className="btn" style={{ backgroundColor:color }} onClick={onClick}>{text}</button>          
    )
}

Button.defaultProps = {
    text : 'submit',
    color : 'green',
}
export default Button
