import CardGrid from "./Components/CardGrid"
import ContactUs from "./Components/Contact"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"


const App = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CardGrid/>
        <ContactUs/>
       <Footer/>

    </div>
  )
}

export default App
