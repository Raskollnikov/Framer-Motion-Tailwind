
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from "./components/Services"
import About from "./components/About" 
import Testimonials from "./components/Testimonials"
import WorkingStep from "./components/WorkingStep"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"

import Footer from "./components/Footer"
import "react-toastify/dist/ReactToastify.css"  

function App() {


  return (
    <div className="font-primary overflow-x-hidden">
      <ToastContainer theme="dark" />
        <Navbar/>
        <Hero />
        <Services />
        <About />
        <WorkingStep />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
  )
}

export default App