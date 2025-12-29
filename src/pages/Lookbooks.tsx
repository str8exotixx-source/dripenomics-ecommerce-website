import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import editorialHorse from "@/assets/editorial-horse.jpg";
import productBack from "@/assets/product-prelude-back.jpg";
import productFront from "@/assets/product-prelude-front.jpg";

const lookbooks = [
  {
    id: "city-stories",
    title: "City Stories — The Prelude",
    season: "AW25",
    foreword: "Behind The Capsule",
    description: `When we first envisioned City Stories. It was far beyond trends and meaningless aesthetics. It was rather a quiet, deliberate act of remembering what was, what remains and what is yet to be. This capsule collection is a visual tribute to our origins — to those who were shaped by legacies of oppression and yet bloom beyond expectation. Just as a blue rose emerges from deep within a fountain of wilted ones.

This capsule is grounded upon retro minimalism — a visual blueprint birthed from the historical architecture of the city. City Stories is a layered interplay of symbolism that carries the echoes of the evolution of our homeland. From the landmark of the resolute white horse — to the contrast use of colour introducing the narrative of the blue rose against the burgundy of the wilted roses. Every detail has been placed with intention. This is our gift from the heart of South Africa to the world.`,
    coverImage: editorialHorse,
    images: [editorialHorse, productFront, productBack],
  },
  {
    id: "the-perfect-shirt",
    title: "The Perfect Shirt — Collectors Edition",
    season: "SS23",
    foreword: "Documenting The Capsule",
    description: `While there was no campaign direction for the perfect shirt series — the name of this t-shirt series was derived from a comment by one of our people named Resego Leserwane. This capsule was a sequel to the founding movement of the Live. Breathe. Dress For It. — which was an awareness march that highly impacted the creative landscape of Bloemfontein.

This march was a call to like-minded people to establish a collective economy — a creative movement that will liberate and equip individuals to blueprint their dreams through the transformative power of fashion.

This capsule is the most admired yet the rarest to find. The first product to be curated by Dripenomics — a classic. We now refer to it as the Collectors Edition.`,
    coverImage: productFront,
    images: [productFront, productBack, editorialHorse],
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
              Each campaign is a curated interplay of craft and culture — shaping the identity of Dripenomics. Style is where fashion meets identity. This is our truth. Our blueprint. Welcome to our Lookbooks.
            </p>
          </div>
        </div>
      </section>

      {/* Lookbooks */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {lookbooks.map((lookbook, index) => (
              <article
                key={lookbook.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start`}
              >
                {/* Cover Image */}
                <div className={`editorial-image aspect-[3/4] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={lookbook.coverImage}
                    alt={lookbook.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} lg:pt-8`}>
                  <p className="brand-subtitle text-muted-foreground mb-2">{lookbook.season}</p>
                  <h2 className="brand-title text-3xl md:text-4xl mb-4">{lookbook.title}</h2>
                  <p className="brand-subtitle text-foreground/80 mb-6">{lookbook.foreword}</p>
                  
                  <div className="text-muted-foreground text-justified space-y-4 mb-8">
                    {lookbook.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>

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

                  <Link to={`/lookbook/${lookbook.id}`} className="btn-outline">
                    View Full Lookbook
                  </Link>
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
