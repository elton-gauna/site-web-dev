import Logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import './estilo.css';

const Home = ()=>{
    return(
        <main className='conteiner-home'>
            <img src={Logo} alt='Logo' />

            <div>
                <h1>Desenvolvendo suas idéias</h1>
                <p>Suas idéias representam nossa missão.</p>
                <p>Nossa empresa está voltada em satisfazer nossos clientes com projetos de qualidade, elaborados 
                    com as mais novas tecnologias exixtentes no mercado de desenvolvimento.</p>
                <p>Nossos desenvolvedores, estão em constante atualização, atentos a todas as tecnologias.</p>
                <Link to="/produtos"><button>Acessar Produtos</button></Link>
            </div>
        </main>
    )
}

export default Home;