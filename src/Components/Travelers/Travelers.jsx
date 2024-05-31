import React, { useEffect } from 'react'

import pessoa1 from '../../Components/assets/pessoa1.png'
import pessoa1bg from '../../Components/assets/pessoa1bg.jpg'
import pessoa2 from '../../Components/assets/pessoa2.png'
import pessoa2bg from '../../Components/assets/pessoa2bg.jpg'
import pessoa3 from '../../Components/assets/pessoa3.png'
import pessoa3bg from '../../Components/assets/pessoa3bg.jpg'
import pessoa4 from '../../Components/assets/pessoa4.png'
import pessoa4bg from '../../Components/assets/pessoa4bg.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';


const travelers = [
  {
    id: 1,
    bgPessoa: pessoa1bg,
    imgPessoa: pessoa1,
    nomePessoa: 'Lucia Oliveira',
    socialPessoa: '@lucia_traveler',
    avaliacao: 'Jitur superou todas as expectativas! Atendimento impecável e roteiros incríveis. Voltarei com certeza! Gratidão.'
  },
  {
    id: 2,
    bgPessoa: pessoa2bg,
    imgPessoa: pessoa2,
    nomePessoa: 'Pedro Silva',
    socialPessoa: '@pedrosilva_adventures',
    avaliacao: 'Experiência única com a Jitur! Profissionalismo, qualidade e momentos inesquecíveis. Recomendo a todos os viajantes!'
  },
  {
    id: 3,
    bgPessoa: pessoa3bg,
    imgPessoa: pessoa3,
    nomePessoa: 'Rafaela Lima',
    socialPessoa: '@rafa.lima_explorer',
    avaliacao: 'Jitur fez minha viagem perfeita! Serviço de primeira classe e destinos paradisíacos. Muito obrigada pelo cuidado!'
  },
  {
    id: 4,
    bgPessoa: pessoa4bg,
    imgPessoa: pessoa4,
    nomePessoa: 'Marcos Costa',
    socialPessoa: '@marcoscosta_wanderlust',
    avaliacao: 'Jitur é simplesmente incrível! Roteiros personalizados, suporte excepcional e memórias que durarão para sempre. Obrigada por tudo!'
  }
]


function Travelers() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section id="avaliacoes">
      <div className='travelers container section'>
        <div className="sectionContainer">
          <h2 data-aos="fade-down" data-aos-duration="2500">
            Avaliações de Clientes
          </h2>

          <div className="travelersContainer grids">
            {/* Card Passageiro */}

            {
              travelers.map(({ id, bgPessoa, imgPessoa, nomePessoa, socialPessoa, avaliacao }) => {
                return (
                  <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">

                    <img src={bgPessoa} className='destinationImage' />

                    <div className="travelerDetails">
                      <div className="travelerPicture">
                        <img src={imgPessoa} className='travelerImage' />
                      </div>
                      <div className="travelerName">
                        <span>{nomePessoa}</span>
                        <p>{socialPessoa}</p>
                        <p className='avaliacao'>{avaliacao}</p>
                      </div>
                    </div>

                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Travelers
