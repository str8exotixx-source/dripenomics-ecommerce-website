import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import cityStories1 from "@/assets/city-stories-1.jpg";
import collectors2 from "@/assets/collectors-2.jpg";

const About = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-3 md:mb-4">About Us</p>
            <h1 className="brand-title text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
              Our Story
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              We founded Dripenomics in 2024 for a simple purpose, to reveal how fashion transforms identity and moves culture forward.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="editorial-image aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src={cityStories1}
                alt="Dripenomics editorial"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="space-y-4 md:space-y-6 text-muted-foreground text-justified">
                <p>
                  Blending retro minimalism with cultural narrative and quality craftsmanship to curate editorial campaigns that will impact our community beyond visual appeal.
                </p>
                <p>
                  We believe in the transformative power of fashion — not just as clothing, but as a medium for self-expression, cultural dialogue, and community building.
                </p>
                <p>
                  Every piece we create is a deliberate act of remembering what was, celebrating what is, and envisioning what triumphs ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Impact Section */}
      <section className="py-12 md:py-20 bg-background-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="brand-subtitle text-muted-foreground mb-3 md:mb-4 text-center">Our Impact</p>
            <h2 className="brand-title text-xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-center">
              Cultural Impact Through Fashion
            </h2>

            <div className="space-y-4 md:space-y-8 text-muted-foreground text-justified text-sm md:text-base">
              <p>
                For the past few years Dripenomics has immersed itself within the creative landscape of Bloemfontein — fostering local art exchange, redefining relationships between art and audience and driving economic growth through community engagement and storytelling through their community orientated fashion experiences — the Creative Footprint.
              </p>
              <p>
                The brand moves beyond traditional retail by organising pop-ups and exhibitions that blur the lines between artist and audience. Redefining fashion engagement. The brand is associated with a creative strategy that involves using fashion, film and cultural narratives to explore identity.
              </p>
              <p>
                Dripenomics is notably popular within the student community and has an impact on contemporary youth fashion trends and lifestyle choices in South Africa. Driving collaboration within the local creative ecosystem which results in economic empowerment.
              </p>
              <p>
                In essence, their impact stems from their ability to blend global fashion strategies with local values and narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="brand-subtitle text-muted-foreground mb-3 md:mb-4">The Creative Footprint</p>
              <h2 className="brand-title text-xl md:text-3xl lg:text-4xl mb-6 md:mb-8">
                Beyond Traditional Retail
              </h2>
              <div className="space-y-4 md:space-y-6 text-muted-foreground text-justified text-sm md:text-base">
                <p>
                  We organise pop-ups and exhibitions that blur the lines between artist and audience, redefining fashion engagement through immersive experiences.
                </p>
                <p>
                  Our creative strategy involves using fashion, film, and cultural narratives to explore identity — creating moments that resonate beyond the runway.
                </p>
                <p>
                  Through collaboration within the local creative ecosystem, we drive economic empowerment and foster meaningful connections within our community.
                </p>
              </div>
            </div>
            <div className="editorial-image aspect-[3/4] max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
              <img
                src={collectors2}
                alt="Dripenomics community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
