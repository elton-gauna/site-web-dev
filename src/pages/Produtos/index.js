import ComponentService from '../../componentes/Produto';
import './estilo.css';


const Produto = ()=>{
    return(
        <div className='conteiner-produtos'>
            <ComponentService name='Site Comercial' tipo='logo'/>
            <ComponentService name='Site Genérico' tipo='html'/>
            <ComponentService name='Site Pessoal' tipo='site_pessoal'/>
            <ComponentService name='Blog' tipo='blog'/>
            <ComponentService name='Site em SPA' tipo='site'/>
        </div>
    )
}

export default Produto;