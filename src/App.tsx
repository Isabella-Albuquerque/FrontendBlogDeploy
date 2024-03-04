import './App.css';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './paginas/cadastro/Cadastro';
import Navbar from './componentes/navBar/NavBar';
import Home from './paginas/home/Home';
import Footer from './componentes/footer/Footer';
import ListaTemas from './componentes/temas/listaTemas/ListaTemas';
import FormularioTema from './componentes/temas/formularioTema/FormularioTema';
import DeletarTema from './componentes/temas/deletarTemas/DeletarTema';
import ListaPostagens from './componentes/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './componentes/postagens/formularioPostagem/FormularioPostagem';

import Perfil from './paginas/perfil/Perfil';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-purple-400",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  colored: "bg-white-600 font-purple-500",
};

function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={3000} />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;