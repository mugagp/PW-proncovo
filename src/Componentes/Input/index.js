import './Input.css'

function Input({nome, tipo, descricao, clicou, valor}){
    return(
        <div className='inputs'>
            <label>{nome}</label>
            <input
                type={tipo}
                placeholder={descricao}
                onChange={clicou}
                value={valor}            
            />
        </div>
    )
}

export default Input