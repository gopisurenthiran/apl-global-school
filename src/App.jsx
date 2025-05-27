import { useState } from 'react'
import Header  from './components/Header' 
import Banner from './components/banner'
import Tab from './components/Tab'
import CreativeTabs from './components/TabSection'
import Footer from './components/Footer'
import './App.css'
import AdmissionsBanner from './components/AdmissionsBanner'
import GallerySection from './components/GallerySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Tab/>
      {/* <CreativeTabs /> */}
      <AdmissionsBanner />
      <GallerySection />
      <Footer/>
  
    </>
  )
}

export default App
