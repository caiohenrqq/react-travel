import React from 'react'
import loungeimg from '../../Components/assets/loungeImg.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grids">
        <div className="imgDiv">
          <img src={loungeimg} />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grids">
          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airpot
            </span>
            <p>
              Yu can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airpot
            </span>
            <p>
              Yu can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airpot
            </span>
            <p>
              Yu can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airpot
            </span>
            <p>
              Yu can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
