import { useState } from "react";

import AdmissionsBanner from "./Home/AdmissionsBanner";
import GallerySection from "./Home/GallerySection";
import CambridgeDiplomaSection from "./Home/CambridgeDiplomaSection";
import ContentBanner from "./Home/ContentBanner";
import UpcommingEvents from "./Home/UpcomingEvent";
import EventList from "./Home/EventList";
import BannerSection from "./Home/BannerSection";
import TestimonialCarousel from "./Home/TestimonialCarousel";
import ContactUs from "./Home/Contact";
import TabsSection from "./Home/TabsSection";
import ContactSection from "./Home/ContactSection";
import NewsEventsSection from "./Home/NewsEventsSection";

function HomePages() {
  return (
    <>
      <BannerSection />
      <TabsSection />
      <AdmissionsBanner />
      <ContentBanner />
      <UpcommingEvents />
      {/* <EventList /> */}
      <NewsEventsSection />
      <GallerySection />
      <CambridgeDiplomaSection />
      <TestimonialCarousel />
      <ContactUs />
      <ContactSection />
    </>
  );
}

export default HomePages;
