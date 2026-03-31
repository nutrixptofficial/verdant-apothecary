import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!form.email.includes("@")) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const info = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: Mail, label: "Email", value: "info@msurherbs.com" },
    { icon: MapPin, label: "Address", value: "123 Herbal Lane, Ayurveda Nagar, India" },
  ];

  return (
    <div>
      <section className="hero-gradient text-primary-foreground section-padding text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="border-border/50 bg-card">
            <CardContent className="p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info & Map */}
          <div className="space-y-6">
            {info.map((i) => (
              <div key={i.label} className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{i.label}</h3>
                  <p className="text-muted-foreground text-sm">{i.value}</p>
                </div>
              </div>
            ))}
            {/* Map placeholder */}
            <div className="h-64 rounded-xl bg-muted flex items-center justify-center border border-border">
              <p className="text-muted-foreground text-sm">Map placeholder — Integrate Google Maps here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
