import React from 'react'
import loungeimg from '../../Components/assets/loungeImg.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grids">
        <div className="imgDiv">
          <img src={loungeimg} />
        </div>

        <div className="textDiv">
          <h2>Assistência no Aeroporto</h2>

          <div className="grids grids">
          <div className="singleGrid">
            <span className="gridTitle">
              Check-in Assistido
            </span>
            <p>
            Deixe-nos cuidar de todo o processo de check-in para você, garantindo uma experiência sem estresse desde o início da sua jornada.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Lounge Exclusivo
            </span>
            <p>
              Relaxe e desfrute de nosso lounge exclusivo, com comodidades premium, enquanto aguarda seu voo, proporcionando conforto e conveniência incomparáveis.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Acompanhamento Personalizado
            </span>
            <p>
              Nossa equipe altamente treinada estará ao seu lado em cada etapa do caminho, fornecendo assistência personalizada para garantir que sua viagem seja suave e tranquila.
            </p>
          </div>

          <div className="singleGrid">
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
  )
}

export default Lounge
