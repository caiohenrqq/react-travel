import React, {useEffect} from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Info() {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section id="explorar">
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos="fade-right" data-aos-duration="2500">Viagens para fazer memórias ao redor do mundo!</h2>
          <button data-aos="fade-left" data-aos-duration="2500" className='btn'>
            Explorar
          </button>
        </div>

        <div className="cardsDiv flexColumn">
          <div data-aos="fade-up" data-aos-duration="2500" className="singleCard">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div> 
            <div className="cardContent">
              <span className="cardTitle">Reserve & Relaxe</span>
              <p>A viagem dos seus sonhos começa aqui! Encontre os melhores destinos e aproveite momentos inesquecíveis. 🌴✈️</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3500" className="singleCard">
            <div className="iconDiv flex corUm">
              <BsShieldCheck className='icon'/>
            </div>
            <div className="cardContent">
              <span className="cardTitle">Lista Inteligente</span>
              <p>Planeje sua aventura perfeita com dicas exclusivas, destinos surpreendentes e experiências memoráveis! 🌍✨</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="4500" className="singleCard">
            <div className="iconDiv flex corDois">
              <BsBookmarkCheck className='icon'/>
            </div>
            <div className="cardContent">
              <span className="cardTitle">Economize Mais</span>
              <p>Descubra destinos incríveis e ofertas imperdíveis para uma viagem inesquecível sem gastar muito!  ✈️💰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )   
}

export default Info
