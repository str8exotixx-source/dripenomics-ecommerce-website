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
              alt="Dripenomics editorial - Live Breathe Dress For It"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="brand-subtitle text-muted-foreground mb-4">Our Philosophy</p>
            <h2 className="brand-title text-3xl md:text-4xl mb-8">
              Live. Breathe. Dress For It.
            </h2>
            <div className="space-y-6 text-muted-foreground text-justified">
              <p>
                Embodies the idea that your identity is expressed through every aspect of your life. Especially how you dress.
              </p>
              <p>
                We believe that fashion is more than fabric — it's a language, a statement, a way of moving through the world with intention and purpose.
              </p>
              <p>
                Each piece we create carries the weight of our collective narrative, designed for those who understand that style is where fashion meets identity.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/about" className="btn-outline">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
