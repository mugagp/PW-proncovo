import './Login.css'
import Input from '../Input';
import Button from '../Button';

const Login = () => {
    return (
       <div className='container__login'>
        <h1>Proncovô</h1>
        <h2>Login</h2>
        <Input
            nome='E-mail'
            tipo='email'
            descricao='Digite o seu e-mail'
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
       </div>
    )
}
export default Login;