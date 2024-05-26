import React from 'react'

import pessoa1 from '../../Components/assets/pessoa1.png'
  import pessoa1bg from '../../Components/assets/pessoa1bg.jpg'
import pessoa2 from '../../Components/assets/pessoa2.png'
  import pessoa2bg from '../../Components/assets/pessoa2bg.jpg'
import pessoa3 from '../../Components/assets/pessoa3.png'
  import pessoa3bg from '../../Components/assets/pessoa3bg.jpg'
import pessoa4 from '../../Components/assets/pessoa4.png'
  import pessoa4bg from '../../Components/assets/pessoa4bg.jpg'


const travelers = [
  {
    id: 1,
    bgPessoa: pessoa1bg,
    imgPessoa: pessoa1,
    nomePessoa: 'Nome',
    socialPessoa: '@Redes'
  },
  {
    id: 2,
    bgPessoa: pessoa2bg,
    imgPessoa: pessoa2,
    nomePessoa: 'Nome2',
    socialPessoa: '@Redes'
  },
  {
    id: 3,
    bgPessoa: pessoa3bg,
    imgPessoa: pessoa3,
    nomePessoa: 'Nome3',
    socialPessoa: '@Redes'
  },
  {
    id: 4,
    bgPessoa: pessoa4bg,
    imgPessoa: pessoa4,
    nomePessoa: 'Nome4',
    socialPessoa: '@Redes'
  }
]


function Travelers() {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Avaliações de Clientes
        </h2>

        <div className="travelersContainer grids">
          {/* Card Passageiro */}

            {
              travelers.map(({id, bgPessoa, imgPessoa, nomePessoa, socialPessoa})=>{
                  return(
                    <div key={id} className="singleTraveler">

                    <img src={bgPessoa} className='destinationImage'/>
                    
                    <div className="travelerDetails">
                      <div className="travelerPicture">
                        <img src={imgPessoa} className='travelerImage'/>
                      </div>
                      <div className="travelerName">
                        <span>{nomePessoa}</span>
                        <p>{socialPessoa}</p>
                        <p className='avaliacao'>Fantástica experiência com a Jitur! O país oferece paisagens deslumbrantes, cultura vibrante e hospitalidade calorosa.</p>
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
  )
}

export default Travelers
