import React from 'react'

function Subscribers() {
  return (
    <div className='subscribe section'>
      <div className="sectionContainer container">
        <h2>Subscribe Newsletters & get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email adress' />
          <button className='btn'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers
