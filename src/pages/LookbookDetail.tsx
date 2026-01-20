import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import cityStories1 from "@/assets/city-stories-1.jpg";
import cityStories2 from "@/assets/city-stories-2.jpg";
import cityStories3 from "@/assets/city-stories-3.jpg";
import cityStories4 from "@/assets/city-stories-4.jpg";
import collectors1 from "@/assets/collectors-1.jpg";
import collectors2 from "@/assets/collectors-2.jpg";
import collectors3 from "@/assets/collectors-3.jpg";
import collectors4 from "@/assets/collectors-4.jpg";

const lookbooksData: Record<string, {
  title: string;
  season: string;
  foreword: string;
  description: string;
  images: string[];
  productId: string;
}> = {
  "city-stories": {
    title: "City Stories",
    season: "AW25",
    foreword: "Foreword : Behind The Capsule",
    description: `When we first envisioned City Stories. It was far beyond trends and meaningless aesthetics. It was rather a quiet, deliberate act of remembering what was, what remains and what is yet to be. This capsule collection is a visual tribute to our origins — to those who were shaped by legacies of oppression and yet bloom beyond expectation. Just as a blue rose emerges from deep within a fountain of wilted ones.

This capsule is grounded upon retro minimalism — a visual blueprint birthed from the historical architecture of the city. City Stories is a layered interplay of symbolism that carries the echoes of the evolution of our homeland. From the landmark of the resolute white horse — to the contrast use of colour introducing the narrative of the blue rose against the burgundy of the wilted roses. Every detail has been placed with intention. This is our gift from the heart of South Africa to the world.

Welcome to the City Stories.`,
    images: [cityStories1, cityStories2, cityStories3, cityStories4],
    productId: "1",
  },
  "the-perfect-shirt": {
    title: "The Perfect Shirt",
    season: "SS23",
    foreword: "Documenting : Behind The Capsule",
    description: `While there was no campaign direction for the perfect shirt series — the name of this t-shirt series was derived from a comment by one of our people named Resego Leserwane. This capsule was a sequel to the founding movement of the Live. Breathe. Dress For It. — which was an awareness march that highly impacted the creative landscape of Bloemfontein.

This march was a call to like-minded people to establish a collective economy — a creative movement that will liberate and equip individuals to blueprint their dreams through the transformative power of fashion.

This capsule is the most admired yet the rarest to find. The first product to be curated by Dripenomics — a classic. We now refer to it as the Collectors Edition.`,
    images: [collectors1, collectors2, collectors3, collectors4],
    productId: "2",
  },
};

const LookbookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lookbook = id ? lookbooksData[id] : null;

  if (!lookbook) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="brand-title text-3xl mb-4">Lookbook Not Found</h1>
            <Link to="/lookbooks" className="btn-outline">
              Back to Lookbooks
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-2">{lookbook.season}</p>
            <h1 className="brand-title text-2xl md:text-4xl lg:text-5xl mb-4">{lookbook.title}</h1>
            <p className="brand-subtitle text-foreground/80 text-xs md:text-sm">{lookbook.foreword}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-muted-foreground text-justified space-y-4 text-sm md:text-base">
            {lookbook.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
            {lookbook.images.map((image, index) => (
              <div key={index} className="editorial-image aspect-[3/4]">
                <img
                  src={image}
                  alt={`${lookbook.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-12 md:py-20 bg-background-cream">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="brand-title text-xl md:text-3xl mb-4 md:mb-6">
            Shop The Collection
          </h2>
          <Link to={`/product/${lookbook.productId}`} className="btn-primary">
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LookbookDetail;