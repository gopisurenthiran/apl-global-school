import { useState } from 'react'
import Header  from './components/Header' 
import Banner from './components/banner'
import Tab from './components/Tab'
import CreativeTabs from './components/TabSection'
import Footer from './components/Footer'
import './App.css'
import AdmissionsBanner from './components/AdmissionsBanner'
import GallerySection from './components/GallerySection'
import CambridgeDiplomaSection from './components/CambridgeDiplomaSection'
import ContentBanner from './components/ContentBanner'
import UpcommingEvents from './components/UpcomingEvent'
import EventList from './components/EventList'
import TestimonialSlider from './components/TestimonialSlider'
import CardSlider from './components/CardSlider'
import ContactUs from './components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Tab/>
      <AdmissionsBanner />
      <GallerySection />
      <CambridgeDiplomaSection />
      <ContentBanner />
      <UpcommingEvents />
      <EventList />
      <TestimonialSlider />
      <ContactUs />
      <Footer/>
  
    </>
  )
}

export default App
