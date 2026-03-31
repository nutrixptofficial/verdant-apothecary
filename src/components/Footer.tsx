import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="footer-section">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-1 mb-4">
            <Leaf className="h-8 w-8" />
            <span className="font-bold text-xl italic">MSUR</span>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Shop</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Categories</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Arqiyat</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Dry Fruits</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Fruit Preserves</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Herbal Oils</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Herbs</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Spices</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">My Account</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Order Tracking</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">FAQs</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Return Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>03117956306</li>
            <li>msurherbs@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs opacity-50">
        © {new Date().getFullYear()} MSUR Herbs. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
