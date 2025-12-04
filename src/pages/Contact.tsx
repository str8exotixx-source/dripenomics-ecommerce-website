import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { Instagram, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for your message. We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-4">Get In Touch</p>
            <h1 className="brand-title text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-muted-foreground">
              Have a question, collaboration idea, or just want to connect? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="brand-subtitle text-xs mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="brand-subtitle text-xs mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="brand-subtitle text-xs mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                    placeholder="+27 00 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="brand-subtitle text-xs mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <div className="space-y-12">
                <div>
                  <h3 className="brand-subtitle mb-4">Connect With Us</h3>
                  <p className="text-muted-foreground text-justified">
                    Whether you're interested in our collections, have a collaboration proposal, or simply want to share your Dripenomics story — we're here to listen.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-border">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="brand-subtitle text-xs mb-1">Email</h4>
                      <a
                        href="mailto:hello@dripenomics.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@dripenomics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-border">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <h4 className="brand-subtitle text-xs mb-1">Instagram</h4>
                      <a
                        href="https://instagram.com/dripenomics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        @dripenomics
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-border">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="brand-subtitle text-xs mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Johannesburg, South Africa
                      </p>
                    </div>
                  </div>
                </div>

                {/* Collaborations CTA */}
                <div className="p-8 bg-background-cream">
                  <h3 className="brand-subtitle mb-4">Collaborations</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in working together? We're always open to meaningful partnerships that align with our vision.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send us your proposal and let's create something remarkable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
