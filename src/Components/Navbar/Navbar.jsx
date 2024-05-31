import React, { useState, useEffect } from 'react'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import Contato from '../Navbar/Contato.jsx'
import logo from '../assets/jiturlg.png'
import { useMediaQuery } from 'react-responsive';

import Home from '../Support/Support.jsx';

const Navbar = () => {

  
  const [active, setActive] = useState('navBarMenu');
  const [isNavBarShown, setIsNavBarShown] = useState(false);

  const toggleNavBar = () => {
    if (isNavBarShown) {
      setActive('navBarMenu'); // Esconde a barra de navegação
    } else {
      setActive('navBarMenu showNavBar'); // Mostra a barra de navegação
    }
    setIsNavBarShown(!isNavBarShown); // Alterna o estado entre verdadeiro e falso
  };

  const removeNavBar = () => {
    setActive('navBarMenu'); // Esconde a barra de navegação
    setIsNavBarShown(false); // Reseta o ícone para o estado inicial
  };

  // Verifica se é Mobile (768px)

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  let mobile = 'contatoMobile';
  let web = 'contatoWeb'

  if (isMobile) {
    mobile = 'contatoMobile'
    web = 'contatoWeb none'
  } else {
    web = 'contatoWeb'
    mobile = 'contatoMobile none'
  }

  // Adicionar background color na segunda Navbar
  const [noBg, addBg] = useState('navBarTwo')
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navBarBg')
    } else {
      addBg('navBarTwo')
    }
  }

  window.addEventListener('scroll', addBgColor)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='navBar flex'>
      {/* <div className="navBarOne flex">
        <div>
          <SiConsul className='icon'/>
        </div>

        <div className="none flex">
          <li className="flex"><BsPhoneVibrate/>Suporte</li>
          <li className="flex"><AiOutlineGlobal/>Linguagens</li>
        </div>

        <div className="atb flex">
          <span>Logar</span>
          <span>Registrar</span>
        </div>
      </div> */}

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className='Logo' alt="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={() => scrollToSection('home')} className="listItem">Início</li>
            <li onClick={() => scrollToSection('suporte')} className="listItem">Suporte</li>
            <li onClick={() => scrollToSection('explorar')} className="listItem">Explorar</li>
            <li onClick={() => scrollToSection('assistencia')} className="listItem">Assistência</li>
            <li onClick={() => scrollToSection('avaliacoes')} className="listItem">Avaliações</li>
          </ul>
          <div className={mobile}>
            <Contato />
          </div>
        </div>

        <div className={web}>
          <Contato />
        </div>


        <button className='btn flex btnDois'>
          Contato
        </button>

        <div onClick={toggleNavBar} className="toggleIcon none">
          {isNavBarShown ? <IoMdClose className='icon' /> : <CgMenuGridO className='icon' />}
        </div>
      </div>
    </div>
  );
}

export default Navbar
