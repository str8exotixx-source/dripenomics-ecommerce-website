import { Link } from "react-router-dom";
import editorialImage from "@/assets/editorial-horse.jpg";

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-background-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="editorial-image aspect-[3/4] lg:aspect-auto lg:h-[700px]">
            <img
              src={editorialImage}
              alt="Dripenomics editorial featuring City Stories collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="brand-subtitle text-muted-foreground mb-4">Our Story</p>
            <h2 className="brand-title text-3xl md:text-4xl mb-8">
              Foreword — Behind The City Stories
            </h2>
            <div className="space-y-6 text-muted-foreground text-justified">
              <p>
                When we first envisioned City Stories, it was far beyond trends and meaningless aesthetics. It was a quiet, deliberate act of remembering what was, what is, and what triumphs today.
              </p>
              <p>
                We sought to create a brand that speaks to the soul of the urban experience — the hustle, the dreams, the stories written on every street corner. Dripenomics is not just clothing; it's a narrative woven into fabric.
              </p>
              <p>
                Not only do we pay homage to the origins of our cultural heritage, but we also celebrate the collective journey of those who dare to live, breathe, and dress for the life they envision.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/about" className="btn-outline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
