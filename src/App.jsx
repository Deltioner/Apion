import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Home/>

      <div className="container">
          <Title subTitle="Services" title="What We Offer"/>
          <Services/>
          <Title subTitle="About us" title="Apion Technology"/>
          <About/>
          <Title subTitle="Contact Us" title="Get in Touch"/>
          <Contact/>
          <Footer/>
      </div>
      
    </div>
  )
}

export default App
