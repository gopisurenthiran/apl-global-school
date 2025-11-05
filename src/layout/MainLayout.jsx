import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LogoLoader from "../components/Loder";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function MainLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetch, assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds for demo, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LogoLoader />;

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
