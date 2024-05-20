import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Order from './components/Order';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Title from './components/Title'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <div className="conatiner">
        <Title subTitle='TechTrek ' title='X '/>
        <Product/>
        <Title subTitle='TechTrek ' title='Pre-Order '/>
        <Order/>
        <Title subTitle='TechTrek ' title='News'/>
        <News/>
        </div>
        
        
        
        <Contact/>
        <Footer/>

      </div>
      
    </>
  )
}

export default App
