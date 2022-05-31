import imgcontato from '../../img/contato.svg';
import './estilo.css';


const Contato = ()=>{
    return(
        <div className='conteiner-principal'>
            <img src={imgcontato} alt='contato' />
            <div className='conteiner-contato'>   
                <form>
                    <label>Nome</label>
                    <input placeholder='Insira seu nome completo' />

                    <label>Email</label>
                    <input type='email' placeholder='Insira seu email' />

                    <label>Telefone</label>
                    <input placeholder='(xx)xxxxx-xxxx' />

                    <label>Mensagem</label>
                    <textarea placeholder='Insira sua idéia aqui!' />
                    <br></br>
                    <input className='botao' type='submit' />
                </form>
            </div>
        </div>
    )
}

export default Contato;