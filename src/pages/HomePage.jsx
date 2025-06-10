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

function HomePages() {
  return (
    <>
      <BannerSection />
      <TabsSection />
      <AdmissionsBanner />
      <GallerySection />
      <CambridgeDiplomaSection />
      <ContentBanner />
      <UpcommingEvents />
      <EventList />
      <TestimonialCarousel />
      <ContactUs />
    </>
  );
}

export default HomePages;
