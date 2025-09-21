import React from 'react'
//components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import TopProduct from './components/TopProduct'
import Banner from './components/Banner'
import Footer from './components/Footer'
//library
import AOS from "aos"
import 'aos/dist/aos.css';
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh()
  },[])
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App