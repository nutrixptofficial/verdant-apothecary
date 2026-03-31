import { Leaf, Award, Users, BookOpen, Shield, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    { name: "Dr. Meera Sharma", role: "Chief Herbalist", color: "linear-gradient(135deg, #2d5a27, #4a7c44)" },
    { name: "Suresh Patel", role: "Quality Director", color: "linear-gradient(135deg, #6b4226, #8b6242)" },
    { name: "Usha Reddy", role: "R&D Head", color: "linear-gradient(135deg, #c8952c, #6b4226)" },
    { name: "Ravi Kumar", role: "Operations Manager", color: "linear-gradient(135deg, #2d5a27, #c8952c)" },
  ];

  const certs = [
    { icon: Award, text: "GMP Certified" },
    { icon: Shield, text: "ISO 9001:2015" },
    { icon: FlaskConical, text: "FSSAI Approved" },
    { icon: BookOpen, text: "Ayush Licensed" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Bridging ancient Ayurvedic wisdom with modern wellness needs</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a deep reverence for nature's healing power, MSUR Herbs is dedicated to bringing authentic,
              pure, and effective herbal products to modern households. We believe that wellness should be natural,
              accessible, and free from harmful chemicals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of expert herbalists and researchers works tirelessly to formulate products that honor
              traditional Ayurvedic knowledge while meeting contemporary quality standards.
            </p>
          </div>
          <div className="h-72 rounded-xl" style={{ background: "linear-gradient(135deg, #2d5a27, #4a7c44, #c8952c)" }} />
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <Card key={t.name} className="border-border/50 bg-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-24 w-24 rounded-full mx-auto" style={{ background: t.color }} />
                  <h3 className="font-heading font-semibold">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certs.map((c) => (
              <div key={c.text} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-muted/50">
                <c.icon className="h-10 w-10 text-primary" />
                <span className="font-semibold text-sm">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
