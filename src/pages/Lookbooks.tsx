import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import editorialHorse from "@/assets/editorial-horse.jpg";
import productBack from "@/assets/product-prelude-back.jpg";
import productFront from "@/assets/product-prelude-front.jpg";

const lookbooks = [
  {
    id: "city-stories-prelude",
    title: "City Stories — The Prelude",
    season: "AW25",
    description: "In a foreword to the city, itself, this collection bridges seemingly disparate elements into one cohesive tapestry, illustrating the duality of our existence.",
    coverImage: productBack,
    images: [editorialHorse, productFront, productBack],
  },
  {
    id: "collective-economy",
    title: "Collective Economy — The Collectors Edition",
    season: "SS24",
    description: "A celebration of community and shared stories. This capsule honors those who collect moments, memories, and meaningful connections.",
    coverImage: editorialHorse,
    images: [productFront, productBack, editorialHorse],
    comingSoon: true,
  },
];

const Lookbooks = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-4">Editorial</p>
            <h1 className="brand-title text-4xl md:text-5xl mb-6">Lookbooks</h1>
            <p className="text-muted-foreground">
              Explore our visual narratives — each lookbook is a chapter in the Dripenomics story, capturing the essence of our collections through editorial imagery.
            </p>
          </div>
        </div>
      </section>

      {/* Lookbooks Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {lookbooks.map((lookbook, index) => (
              <article
                key={lookbook.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Cover Image */}
                <div className={`editorial-image aspect-[3/4] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={lookbook.coverImage}
                    alt={lookbook.title}
                    className="w-full h-full object-cover"
                  />
                  {lookbook.comingSoon && (
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                      <span className="brand-title text-primary-foreground text-2xl">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="brand-subtitle text-muted-foreground mb-2">{lookbook.season}</p>
                  <h2 className="brand-title text-3xl md:text-4xl mb-6">{lookbook.title}</h2>
                  <p className="text-muted-foreground text-justified mb-8">
                    {lookbook.description}
                  </p>

                  {/* Preview Images */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {lookbook.images.slice(0, 3).map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square editorial-image">
                        <img
                          src={image}
                          alt={`${lookbook.title} preview ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {!lookbook.comingSoon && (
                    <Link to={`/lookbook/${lookbook.id}`} className="btn-outline">
                      View Full Lookbook
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-20 bg-background-cream">
        <div className="container mx-auto px-6 text-center">
          <p className="brand-subtitle text-muted-foreground mb-4">Shop The Look</p>
          <h2 className="brand-title text-3xl md:text-4xl mb-6">
            Bring The Story To Life
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Each lookbook showcases pieces available in our store. Explore our collections and find pieces that resonate with your own story.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Lookbooks;
