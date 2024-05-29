import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscribers() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className='subscribe section'>
      <div data-aos="fade-down" data-aos-duration="2500" className="sectionContainer container">
        <h2>Inscreva-se em Newsletters e receba as Últimas Ofertas!</h2>
        <div className="inputDiv">
          <input type="text" placeholder='Insira seu e-mail' />
          <button className='btn'>
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers
