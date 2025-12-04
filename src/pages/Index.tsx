import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroVideo from "@/components/home/HeroVideo";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import BrandStory from "@/components/home/BrandStory";

const Index = () => {
  useEffect(() => {
    // Update page metadata
    document.title = "DRIPENOMICS — Live . Breathe . Dress For It .";
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroVideo />
      <FeaturedCollection />
      <BrandStory />
      <Footer />
    </main>
  );
};

export default Index;
