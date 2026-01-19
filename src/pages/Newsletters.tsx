import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Newsletters = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-3 md:mb-4">Stories</p>
            <h1 className="brand-title text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
              Newsletters
            </h1>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] bg-background-cream flex flex-col items-center justify-center border border-border">
              <h2 className="brand-title text-3xl md:text-5xl">Coming Soon</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Newsletters;
