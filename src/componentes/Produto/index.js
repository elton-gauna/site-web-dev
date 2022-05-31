import './estilo.css';

const serviceComponent = (props)=>{
    const name = props.name;
    const tipo = props.tipo;
    return(
        <div className='conteiner-produto'>
            <img src={require(`../../img/${tipo}.svg`)} alt='Logo service' />
            <p>{name}</p>
        </div>
    )
}

export default serviceComponent;