import { Link } from "react-router-dom";

const HeroVideo = () => {
  return (
    <section className="video-hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="animate-fade-up">
          <p className="text-primary-foreground/80 mb-1 md:mb-2 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Founded in 2024
          </p>
          <h1 className="brand-title text-xl sm:text-2xl md:text-5xl lg:text-6xl text-primary-foreground mb-2 md:mb-4">
            Welcome to Dripenomics
          </h1>
          <p className="text-primary-foreground/90 text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 md:mb-6">
            Retro Minimalism — Made in Africa
          </p>
          <p className="text-primary-foreground/70 text-xs md:text-base max-w-xs md:max-w-lg mx-auto mb-6 md:mb-10 leading-relaxed">
            Dripenomics reflects a quiet blend of heritage and contemporary minimalism — creating clothing that is both timeless and impactful to those who value aesthetic appeal and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/about"
              className="bg-primary-foreground text-foreground px-6 md:px-10 py-3 md:py-4 tracking-widest uppercase text-[10px] md:text-xs font-medium transition-all duration-300 hover:bg-primary-foreground/90"
            >
              About Us
            </Link>
            <Link
              to="/shop"
              className="border border-primary-foreground text-primary-foreground px-6 md:px-10 py-3 md:py-4 tracking-widest uppercase text-[10px] md:text-xs font-medium transition-all duration-300 hover:bg-primary-foreground/10"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
