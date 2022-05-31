import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Produto from './pages/Produtos';

import './estiloglobal.css';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

const Rotas = ()=>{
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
        <Route path="/produtos" element={<Produto/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default Rotas;