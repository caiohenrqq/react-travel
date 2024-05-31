import React, { useEffect } from 'react'
import loungeimg from '../../Components/assets/loungeImg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Lounge = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <section id="assistencia">
      <div className='lounge container section'>
        <div className="sectionContainer grids">
          <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
            <img src={loungeimg} />
          </div>

          <div className="textDiv">
            <h2 data-aos="fade-down" data-aos-duration="2500" >Assistência no Aeroporto</h2>

            <div className="grids grids">
              <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                <span className="gridTitle">
                  Check-in Assistido
                </span>
                <p>
                  Deixe-nos cuidar de todo o processo de check-in para você, garantindo uma experiência sem estresse desde o início da sua jornada.
                </p>
              </div>

              <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                <span className="gridTitle">
                  Lounge Exclusivo
                </span>
                <p>
                  Relaxe e desfrute de nosso lounge exclusivo, com comodidades premium, enquanto aguarda seu voo, proporcionando conforto e conveniência incomparáveis.
                </p>
              </div>

              <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                <span className="gridTitle">
                  Acompanhamento Personalizado
                </span>
                <p>
                  Nossa equipe altamente treinada estará ao seu lado em cada etapa do caminho, fornecendo assistência personalizada para garantir que sua viagem seja suave e tranquila.
                </p>
              </div>

              <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                <span className="gridTitle">
                  Transferência Confortável
                </span>
                <p>
                  Faça sua transferência entre voos de forma tranquila e sem complicações, enquanto cuidamos de todos os detalhes para garantir sua chegada confortável ao destino final.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lounge
