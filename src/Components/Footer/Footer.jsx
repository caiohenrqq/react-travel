import React from 'react'
import logo from '../assets/jiturlg.png'
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
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

        <div className="footerLinks">
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

        <div className="footerLinks">
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
