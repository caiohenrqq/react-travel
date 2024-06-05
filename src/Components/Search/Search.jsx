import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Search = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null); // Desativa se já estiver ativo
    } else {
      setActiveButton(buttonName); // Ativa o botão clicado
    }
  };

  // UseEffect para setar animação
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const validarCheckBox = (event) => {
    setIsChecked(event.target.checked);
  }

  return (
    <div data-aos="fade-up" data-aos-duration="2500" className="search container section">
      <div className="sectionContainer">
        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Localização</h4>
              <input type="text" placeholder="Pra onde você quer ir?" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Passageiros</h4>
              <input type="text" placeholder="Quantos passageiros irão?" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check-in</h4>
              <input type="text" checked={isChecked} placeholder="Qual sua data de ida?" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <div className="checkout">
                <h4>Check-out</h4>
                <input type="checkbox" className="checkbox" onChange={validarCheckBox} />
              </div>
              <input type="text" placeholder="Qual sua data de volta?" className={isChecked ? "inputCheckOut checked" : "inputCheckOut"} disabled={!isChecked} />
            </div>
          </div>

          <button className="btn btnBlock flex">Procurar Passagens</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
