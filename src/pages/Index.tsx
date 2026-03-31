import { Link } from "react-router-dom";
import {
  Leaf, Shield, FlaskConical, Truck, Pill, Coffee, Droplets, Sparkles, Heart, Apple,
  Star, Users, Award, Clock, BookOpen, Mail, CheckCircle, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";

const Hero = () => (
  <section className="hero-gradient text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <Leaf className="absolute top-10 left-10 h-32 w-32 animate-float" />
      <Leaf className="absolute bottom-20 right-20 h-24 w-24 animate-float" style={{ animationDelay: "1s" }} />
      <Leaf className="absolute top-1/2 left-1/3 h-16 w-16 animate-float" style={{ animationDelay: "2s" }} />
    </div>
    <div className="container mx-auto section-padding text-center relative z-10">
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
        Pure Nature, Powerful Healing
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        100% Natural Herbal Products — Rooted in Ancient Wisdom
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8" asChild>
          <Link to="/products">Shop Now</Link>
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8" asChild>
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  </section>
);

const TrustBadges = () => {
  const badges = [
    { icon: CheckCircle, text: "100% Natural" },
    { icon: FlaskConical, text: "Lab Tested" },
    { icon: Shield, text: "No Side Effects" },
    { icon: Truck, text: "Fast Delivery" },
  ];
  return (
    <section className="bg-card border-b border-border">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.text} className="flex items-center justify-center gap-3">
              <b.icon className="h-8 w-8 text-primary" />
              <span className="font-semibold text-sm text-foreground">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: "Herbal Capsules", icon: Pill },
    { name: "Herbal Teas", icon: Coffee },
    { name: "Oils & Extracts", icon: Droplets },
    { name: "Skincare", icon: Sparkles },
    { name: "Immunity Boosters", icon: Heart },
    { name: "Digestive Care", icon: Apple },
  ];
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map((c) => (
            <Link to="/products" key={c.name}>
              <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border/50 bg-card">
                <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <c.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{c.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bestsellers = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Bestselling Products</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">Trusted by thousands of customers for their natural healing properties</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button size="lg" variant="outline" asChild>
          <Link to="/products">View All Products</Link>
        </Button>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const items = [
    { icon: Leaf, title: "Organic Sourcing", desc: "All ingredients sourced from certified organic farms" },
    { icon: Award, title: "GMP Certified", desc: "Manufactured under strict quality control standards" },
    { icon: Shield, title: "No Chemicals", desc: "Free from harmful chemicals and preservatives" },
    { icon: Users, title: "Expert Herbalists", desc: "Formulated by experienced Ayurvedic practitioners" },
    { icon: BookOpen, title: "Ancient Formulas", desc: "Based on time-tested Ayurvedic recipes" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock customer support available" },
  ];
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", quote: "MSUR Herbs' Ashwagandha capsules have transformed my energy levels. I feel more active and stress-free!", rating: 5 },
    { name: "Rajesh Kumar", quote: "The Tulsi Green Tea is amazing. Great taste and I've noticed a significant improvement in my immunity.", rating: 5 },
    { name: "Anita Patel", quote: "Finally found natural skincare that works! The Neem Face Wash cleared my skin within weeks.", rating: 4 },
  ];
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Card key={r.name} className="border-border/50 bg-card">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-accent/40" />
                <p className="text-foreground/80 italic leading-relaxed">"{r.quote}"</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-accent text-accent" : "text-muted"}`} />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{r.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Rooted in Tradition, Backed by Science</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At MSUR Herbs, we believe in the power of nature. Our products are crafted using ancient Ayurvedic formulas,
            enhanced with modern research to deliver safe and effective herbal solutions for everyday health challenges.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Every product is made from hand-picked herbs, processed in GMP-certified facilities, and tested for purity
            and potency before reaching you.
          </p>
          <Button asChild>
            <Link to="/about">Learn Our Story</Link>
          </Button>
        </div>
        <div className="h-72 lg:h-96 rounded-xl" style={{ background: "linear-gradient(135deg, #2d5a27, #4a7c44, #c8952c)" }} />
      </div>
    </div>
  </section>
);

const BlogPreview = () => {
  const posts = [
    { title: "5 Ayurvedic Herbs for Stress Relief", date: "Mar 15, 2026", excerpt: "Discover the most effective herbs used for centuries to combat stress and anxiety naturally." },
    { title: "The Science Behind Herbal Immunity", date: "Mar 10, 2026", excerpt: "How traditional herbs like Giloy and Amla boost your immune system backed by modern research." },
    { title: "Natural Skincare: A Beginner's Guide", date: "Mar 5, 2026", excerpt: "Start your natural skincare journey with these simple herbal remedies for glowing skin." },
  ];
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
              <div className="h-40" style={{ background: "linear-gradient(135deg, #2d5a27, #6b4226)" }} />
              <CardContent className="p-5 space-y-3">
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <h3 className="font-heading font-semibold text-lg text-foreground">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-primary">Read More →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Subscribed!", description: "Thank you for subscribing to our newsletter." });
    setEmail("");
  };
  return (
    <section className="hero-gradient text-primary-foreground">
      <div className="container mx-auto section-padding text-center">
        <Mail className="h-10 w-10 mx-auto mb-4 opacity-80" />
        <h2 className="font-heading text-3xl font-bold mb-3">Stay Connected with Nature</h2>
        <p className="opacity-80 mb-8 max-w-md mx-auto">Get health tips, new product launches, and exclusive offers delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
          />
          <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

const Index = () => (
  <div>
    <Hero />
    <TrustBadges />
    <Categories />
    <Bestsellers />
    <WhyChooseUs />
    <Testimonials />
    <AboutPreview />
    <BlogPreview />
    <Newsletter />
  </div>
);

export default Index;
