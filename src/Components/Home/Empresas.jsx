import React, { useState } from 'react'
import logocvc from '../../Components/assets/cvc-logo.png'
import Slider from 'react-infinite-logo-slider'

const Empresas = () => {
  const logos = [
    logocvc,
    logocvc,
    logocvc,
    logocvc,
    logocvc,
  ];

  return (
    <div className="empresas">
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={'#fff'}
    >
      <Slider.Slide>
        <img src={logocvc} className='logo' />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logocvc} className='logo' />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logocvc} className='logo' />
      </Slider.Slide>
    </Slider>
    </div>
  );
};

export default Empresas;
