import React from 'react'

function Subscribers() {
  return (
    <div className='subscribe section'>
      <div className="sectionContainer container">
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
