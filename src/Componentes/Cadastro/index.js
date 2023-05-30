import './Cadastro.css'
import Input from '../Input'
import Button from '../Button'

function Cadastro() {
    return (
        <section>
            <form className='container__cadastro'>
                <h1>Cadastre-se</h1>
                <Input
                    nome='RA'
                    tipo='text'
                    descricao="Digite o seu RA"
                    onChage='clicou'
                    value='valor'
                />
                <Input
                    nome='Nome Completo'
                    tipo='text'
                    descricao="Digite o seu nome completo"
                    onChage='clicou'
                    value='valor'
                />
                <Input
                    nome='E-mail'
                    tipo='email'
                    descricao="Digite o seu e-mail"
                    onChage='clicou'
                    value='valor'
                />
                <Input
                    nome='Senha'
                    tipo='password'
                    descricao="Digite o seu e-mail"
                    onChage='clicou'
                    value='valor'
                />
                <Button>
                    Entrar
                </Button>
            </form>
        </section>

    )
}
export default Cadastro