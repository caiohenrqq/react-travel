import React from 'react'
import aviao from '../../Components/assets/aviaoImg.svg'

const Support = () => {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className="titlesDiv">
          <small>Suporte de Viagem</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along</p>
        </div>

        <div className="infoDiv">
          <div className="textDiv">

            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number">03</span>
              <h4>Multi-risk travel insurance </h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!
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
