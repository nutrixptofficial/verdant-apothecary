import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="font-heading text-xl font-bold">MSUR Herbs</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Bringing the power of nature to your doorstep with 100% authentic herbal products rooted in ancient Ayurvedic wisdom.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["Home", "Products", "About", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["Herbal Capsules", "Herbal Teas", "Oils & Extracts", "Skincare", "Immunity Boosters"].map((p) => (
              <li key={p}>
                <Link to="/products" className="hover:opacity-100 transition-opacity">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@msurherbs.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 123 Herbal Lane, Ayurveda Nagar, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © {new Date().getFullYear()} MSUR Herbs. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
