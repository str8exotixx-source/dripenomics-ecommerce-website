import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import cityStories1 from "@/assets/city-stories-1.jpg";
import collectors1 from "@/assets/collectors-1.jpg";

const lookbooks = [
  {
    id: "city-stories",
    title: "City Stories",
    season: "AW25",
    coverImage: cityStories1,
  },
  {
    id: "the-perfect-shirt",
    title: "The Perfect Shirt",
    season: "SS23",
    coverImage: collectors1,
  },
];

const Lookbooks = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-3 md:mb-4">Editorial</p>
            <h1 className="brand-title text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">Lookbooks</h1>
            <p className="text-muted-foreground text-sm md:text-base px-2">
              Each campaign is a curated interplay of craft and culture — shaping the identity of Dripenomics. Style is where fashion meets identity. This is our truth. Our blueprint. Welcome to our Lookbooks.
            </p>
          </div>
        </div>
      </section>

      {/* Lookbooks Grid */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {lookbooks.map((lookbook) => (
              <Link
                key={lookbook.id}
                to={`/lookbooks/${lookbook.id}`}
                className="group"
              >
                <div className="editorial-image aspect-[3/4] mb-4">
                  <img
                    src={lookbook.coverImage}
                    alt={lookbook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="brand-subtitle text-muted-foreground text-xs mb-1">{lookbook.season}</p>
                <h2 className="brand-title text-lg md:text-xl group-hover:opacity-60 transition-opacity">{lookbook.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Lookbooks;