import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";
// Assets
import video from '../assets/horizon.mp4'
import aviao from '../assets/aviao.png'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Crie Memórias Inesquecíveis Que Durarão Para Sempre!</h1>
        <FaLongArrowAltDown className='icon'/>
      </div>

      <div className='homeImagens flex'>

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        
        <img src={aviao} className='aviao' />
      </div>
    </div>
  )
}

export default Home
