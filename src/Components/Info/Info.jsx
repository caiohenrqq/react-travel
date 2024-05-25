import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'

function Info() {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Viagens para fazer memórias ao redor do mundo</h2>
          <button className='btn'>
            Explorar
          </button>
        </div>

        <div className="cardsDiv flexColumn">
          <div className="singleCard">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <div className="cardContent">
              <span className="cardTitle">Book & Relax</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
          </div>

          <div className="singleCard">
            <div className="iconDiv flex corUm">
              <BsShieldCheck className='icon'/>
            </div>
            <div className="cardContent">
              <span className="cardTitle">Smart Checklist</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
          </div>

          <div className="singleCard">
            <div className="iconDiv flex corDois">
              <BsBookmarkCheck className='icon'/>
            </div>
            <div className="cardContent">
              <span className="cardTitle">Save More</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )   
}

export default Info
