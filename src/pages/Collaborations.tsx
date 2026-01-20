import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const Collaborations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-3 md:mb-4">Partner With Us</p>
            <h1 className="brand-title text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 break-words">
              Collaborations
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg px-2">
              Every collaboration is an intentional meeting of ideas — a great one usually begins with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="brand-subtitle text-xs mb-2 block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-secondary px-4 py-3 md:py-4 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="brand-subtitle text-xs mb-2 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-secondary px-4 py-3 md:py-4 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="brand-subtitle text-xs mb-2 block">Your Idea</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-secondary px-4 py-3 md:py-4 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                  placeholder="Tell us about your collaboration idea..."
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>

            <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-border text-center">
              <p className="text-muted-foreground mb-4 text-sm">
                Or reach out directly
              </p>
              <a
                href="mailto:hello@dripenomics.com"
                className="text-foreground hover:opacity-60 transition-opacity text-sm md:text-base break-all"
              >
                hello@dripenomics.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Collaborations;
