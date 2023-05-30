import './Button.css'

const Button = ({children}) =>{
    return(
        <button className="botao__logar">
            {children}
        </button>
    )
}
export default Button