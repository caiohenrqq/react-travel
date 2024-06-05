import React, { useState } from 'react'
import logocvc from '../../Components/assets/cvc-logo.png'
import Slider from 'react-infinite-logo-slider'
import { useMediaQuery } from 'react-responsive';
const Empresas = () => {
   // Verifica se é Mobile (768px)
   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="empresas">
    <Slider
    width={isMobile ? '100px' : '150px'}
    duration={100}
    pauseOnHover={true}
    blurBorders={true}
    blurBoderColor={'#f0f4f4'}
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
