import React, { useEffect } from 'react'
import aviaoPessoas from '../../Components/assets/aviaoPessoas.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Support = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className="titlesDiv">
          <small>Suporte de Viagens</small>
          <h2>Planeje sua viagem com confiância!</h2>
          <p>Encontre ajuda para reservas e planos de viagem e veja o que esperar ao longo do caminho.</p>
        </div>

        <div className="infoDiv">
          <div className="textDiv">
            <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
              <span className="number">01</span>
              <h4>Requisitos de Viagem</h4>
              <p>
                Encontre ajuda para reservas e planos de viagem, e saiba o que esperar ao longo da jornada para os seus destinos favoritos! 
              </p>
            </div>

            <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
              <span className="number corUm">02</span>
              <h4>Serviço de Motorista à sua Chegada</h4>
              <p>
                Relaxe! Motorista profissional te espera no aeroporto, ajuda com bagagem e te leva ao destino com conforto e segurança.
              </p>
            </div>

            <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
              <span className="number corDois">03</span>
              <h4>Seguro de Viagem Multirrisco</h4>
              <p>
                Viaje tranquilo com nosso Seguro de Viagem Multirrisco, cobrindo saúde, bagagem, voos e emergências, garantindo proteção completa.
              </p>
            </div>

          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
            <img src={aviaoPessoas} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Support
