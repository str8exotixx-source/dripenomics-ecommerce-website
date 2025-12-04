import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import editorialImage from "@/assets/editorial-horse.jpg";
import productFront from "@/assets/product-prelude-front.jpg";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-4">About Us</p>
            <h1 className="brand-title text-4xl md:text-5xl lg:text-6xl mb-8">
              Cultural Impact Through Fashion
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dripenomics is more than a clothing brand — it's a movement that bridges cultural heritage with contemporary expression.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="editorial-image aspect-[3/4]">
              <img
                src={editorialImage}
                alt="Dripenomics editorial"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="brand-subtitle text-muted-foreground mb-4">Our Mission</p>
              <h2 className="brand-title text-3xl md:text-4xl mb-8">
                Live . Breathe . Dress For It .
              </h2>
              <div className="space-y-6 text-muted-foreground text-justified">
                <p>
                  When we first envisioned Dripenomics, it was far beyond trends and meaningless aesthetics. It was a quiet, deliberate act of remembering what was, what is, and what triumphs today.
                </p>
                <p>
                  We sought to create a brand that speaks to the soul of the urban experience — the hustle, the dreams, the stories written on every street corner. Every piece we create carries the weight of our collective narrative.
                </p>
                <p>
                  From the streets of Johannesburg to cities across the globe, Dripenomics represents the spirit of those who refuse to be ordinary. We are the storytellers, the dreamers, the ones who understand that fashion is merely the canvas for a much larger conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="brand-subtitle text-muted-foreground mb-4 text-center">Our Values</p>
            <h2 className="brand-title text-3xl md:text-4xl mb-16 text-center">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center">
                  <span className="brand-title text-2xl">01</span>
                </div>
                <h3 className="brand-subtitle mb-4">Authenticity</h3>
                <p className="text-sm text-muted-foreground">
                  Every design tells a genuine story rooted in our cultural heritage and lived experiences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center">
                  <span className="brand-title text-2xl">02</span>
                </div>
                <h3 className="brand-subtitle mb-4">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Premium materials and meticulous craftsmanship ensure pieces that stand the test of time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center">
                  <span className="brand-title text-2xl">03</span>
                </div>
                <h3 className="brand-subtitle mb-4">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a global collective of individuals who share our vision and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Origin Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="brand-subtitle text-muted-foreground mb-4">Our Origin</p>
              <h2 className="brand-title text-3xl md:text-4xl mb-8">
                Born From The City
              </h2>
              <div className="space-y-6 text-muted-foreground text-justified">
                <p>
                  Dripenomics was founded in the heart of South Africa, where diverse cultures intersect and inspire. Our designs draw from the rich tapestry of African heritage while embracing global streetwear influences.
                </p>
                <p>
                  Each collection is a chapter in our ongoing story — a narrative that celebrates resilience, creativity, and the unapologetic pursuit of excellence. We don't just make clothes; we craft wearable art that resonates with the modern dreamer.
                </p>
                <p>
                  Join us in redefining what it means to dress with intention. Every thread, every stitch, every print carries the essence of our journey.
                </p>
              </div>
            </div>
            <div className="editorial-image aspect-[3/4] order-1 lg:order-2">
              <img
                src={productFront}
                alt="Dripenomics founder"
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
