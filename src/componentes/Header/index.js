import { Link } from "react-router-dom";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {SiJavascript} from "react-icons/si";
 import './estilo.css';

const Header = ()=>{
    return(
        <main className="conteiner">
            <div>
            <ImHtmlFive size={32}/>
            <SiCss3 size={32}/>
            <SiJavascript size={32}/>
            <GrReactjs size={32}/>
            <h1>GG Web Developer</h1>
            </div>

            <ul>
                <li><Link to='/'><a>Home</a></Link></li>
                <li><Link to='/produtos'><a>Produtos</a></Link></li>
                <li><Link to='/contato'><a>Contato</a></Link></li>
            </ul>
        </main>
    )
}

export default Header;