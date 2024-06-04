import React, { useState } from 'react'
import logocvc from '../../Components/assets/cvc-logo.png'
import Slider from 'react-infinite-logo-slider'

const Empresas = () => {
  
  return (
    <div className="empresas">
    <Slider
    width="250px"
    duration={40}
    pauseOnHover={true}
    blurBoderColor={'#fff'}
    >
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
    <Slider.Slide>
        <img src={logocvc} alt="any" className='logoSlider' />
    </Slider.Slide>
</Slider>
</div>
  );
};

export default Empresas;
