import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/jiturlg.png'
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import Empresas from '../Footer/Empresas.jsx';

function Footer() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className='footer'>
      <div data-aos="fade-up" data-aos-duration="2500">
        <Empresas />
      </div>
      <div className="sectionContainer container grid">
        <div className="gridOne" data-aos="fade-up" data-aos-duration="2500">
          <div className="logoDiv">
            <img src={logo} className='logo' />
          </div>
          <p>A sua agência de viagens! </p>
          <div className="socialIcon flex">
          <TiSocialFacebook className='icon' />
          <AiOutlineTwitter className='icon' />
          <FaWhatsapp className='icon' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">
            Informação
          </span>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Suporte</a>
          </li>
          <li>
            <a href="">Viagens</a>
          </li>
          <li>
            <a href="">Assistência</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">
            Guia Rápido
          </span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Suporte</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>© Copyright Jitur | Desenvolvido por <a href="https://emailto-caiohenrqq.profissional@gmail.com" target='_blank'>henrqq</a></p>
      </div>
    </div>
  )
}

export default Footer
