import { useState } from 'react'
import Header  from './components/Header' 
import Tab from './pages/Tab'
import CreativeTabs from './pages/TabSection'
import Footer from './components/Footer'
import './App.css'
import AdmissionsBanner from './pages/AdmissionsBanner'
import GallerySection from './pages/GallerySection'
import CambridgeDiplomaSection from './pages/CambridgeDiplomaSection'
import ContentBanner from './pages/ContentBanner'
import UpcommingEvents from './pages/UpcomingEvent'
import EventList from './pages/EventList'
import TestimonialSlider from './pages/TestimonialSlider'
import CardSlider from './pages/CardSlider'
import ContactUs from './pages/ContactUs'
import BannerSection from './pages/BannerSection'



function App() {
  

  return (
    <>
      <Header/>
      <BannerSection/>
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
