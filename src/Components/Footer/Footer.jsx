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
          <p>Sua mente deve ser mais forte que seus sentimentos, voe!</p>
          <div className="socialIcon flex">
          <TiSocialFacebook className='icon' />
          <AiOutlineTwitter className='icon' />
          <FaWhatsapp className='icon' />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Check-out</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Quick Guide
          </span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How To</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Check-out</a>
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
