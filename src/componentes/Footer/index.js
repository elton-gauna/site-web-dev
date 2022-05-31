import './estilo.css';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {SiJavascript} from "react-icons/si";

const Footer = ()=>{
    return(
        <footer>
            <h3>&copy; Desenvolvido por GG Web Developer utilizando</h3>
            <div>
                <ImHtmlFive size={32}/>
                <SiCss3 size={32}/>
                <SiJavascript size={32}/>
                <GrReactjs size={32}/>
            </div>
        </footer>
    )
}

export default Footer;