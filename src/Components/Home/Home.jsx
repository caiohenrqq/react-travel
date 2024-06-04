import React, { useEffect } from "react";
// Assets
import video from "../assets/horizon.mp4";
import aviao from "../assets/aviao.png";

import AOS from "aos";
import "aos/dist/aos.css";

import Empresas from "../Footer/Empresas";

const Home = () => {
  // UseEffect para setar animação
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="home">
      <div className="home flex container">
        <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500" data-aos-offset="50">
          Crie Memórias Inesquecíveis Que Durarão Para Sempre!
        </h1>
        </div>

        <div className="homeImagens flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className="video"></video>
          </div>

          <img src={aviao} className="aviao" />
        </div>
      </div>
    </section>
  );
};

export default Home;
