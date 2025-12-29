import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-4">Experiences</p>
            <h1 className="brand-title text-4xl md:text-5xl lg:text-6xl mb-8">
              Events
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our upcoming and past experiences — curated moments, pop-ups, and activations that breathe life into each of us.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] bg-background-cream flex flex-col items-center justify-center border border-border">
              <p className="brand-subtitle text-muted-foreground mb-4">Stay Tuned</p>
              <h2 className="brand-title text-4xl md:text-6xl mb-6">Coming Soon</h2>
              <p className="text-muted-foreground text-center max-w-md px-6">
                We're curating something special. Follow us on social media to be the first to know.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-outline">
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
