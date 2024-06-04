import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import Projetos from './pages/projetos/index.jsx';
import Curriculo from './pages/curriculo/index.jsx';
import Contato from './pages/contato/index.jsx';

export default function RootLayout() {
  return (
    <html lang="en">
      
      <body>
      <HashRouter>
        <Header></Header>
        <div>         
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route path="/curriculo" element={<Curriculo />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>        
        </div>
        <Footer></Footer>
        </HashRouter>
      </body>
      
    </html>
  );
}
