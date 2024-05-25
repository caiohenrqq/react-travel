import React from 'react'
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Search from './Components/Search/Search.jsx'
import Support from './Components/Support/Support.jsx'
import Info from './Components/Info/Info.jsx'
import Lounge from './Components/Lounge/Lounge.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Subscribers from './Components/Subscribers/Subscribers.jsx'
import Travelers from './Components/Travelers/Travelers.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      {/* <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/> */}
    </div>
  )
}

export default App
