import React from 'react'
import aviao from '../../Components/assets/aviaoImg.svg'

const Support = () => {
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

            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Requisitos de Viagem</h4>
              <p>
                Encontre ajuda para reservas e planos de viagem, e saiba o que esperar ao longo da jornada para os seus destinos favoritos! 
              </p>
            </div>

            <div className="singleInfo">
              <span className="number">02</span>
              <h4>Serviço de Motorista à sua Chegada</h4>
              <p>
                Relaxe! Motorista profissional te espera no aeroporto, ajuda com bagagem e te leva ao destino com conforto e segurança.
              </p>
            </div>

            <div className="singleInfo">
              <span className="number">03</span>
              <h4>Seguro de Viagem Multirrisco</h4>
              <p>
                Viaje tranquilo com nosso Seguro de Viagem Multirrisco, cobrindo saúde, bagagem, voos e emergências, garantindo proteção completa.
              </p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={aviao} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Support
