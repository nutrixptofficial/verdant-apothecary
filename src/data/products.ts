import { Product } from "@/contexts/CartContext";

import prodSaffron from "@/assets/prod-saffron.jpg";
import prodAnardana from "@/assets/prod-anardana.jpg";
import prodKaliMirch from "@/assets/prod-kali-mirch.jpg";
import prodBlackPepper from "@/assets/prod-black-pepper.jpg";
import prodGinger from "@/assets/prod-ginger.jpg";
import prodNeem from "@/assets/prod-neem.jpg";
import prodRedChilli from "@/assets/prod-red-chilli.jpg";
import prodCardamom from "@/assets/prod-cardamom.jpg";

export const products: Product[] = [
  { id: 1, name: "Saffron | Zafran | زعفران", price: 1450, description: "Premium quality saffron threads", category: "Herbs", rating: 5, image: prodSaffron },
  { id: 2, name: "Pomegranate Seeds | Annar Dana | اناردانہ", price: 120, description: "Dried pomegranate seeds", category: "Dry Fruits", rating: 4, image: prodAnardana, priceRange: "₨ 120–₨ 220" },
  { id: 3, name: "Kali Mirch Powder (Black Pepper Powder)", price: 550, description: "Premium ground black pepper", category: "Spices", rating: 5, image: prodKaliMirch, originalPrice: 700 },
  { id: 4, name: "Kali Mirch Sabat (Black Pepper Whole)", price: 180, description: "Whole black peppercorns", category: "Spices", rating: 4, image: prodBlackPepper, priceRange: "₨ 180–₨ 550" },
  { id: 5, name: "Ginger | Sund | سنڈھ", price: 210, description: "Dried ginger powder", category: "Herbs", rating: 5, image: prodGinger },
  { id: 6, name: "Neem | نیم", price: 60, description: "Pure neem leaves powder", category: "Herbs", rating: 4, image: prodNeem },
  { id: 7, name: "Lal Mirch Darla - Red Chilli Powder", price: 120, description: "Premium red chilli powder", category: "Spices", rating: 5, image: prodRedChilli, priceRange: "₨ 120–₨ 450" },
  { id: 8, name: "Sabz Elaichi (Green Cardamom)", price: 180, description: "Fragrant green cardamom pods", category: "Spices", rating: 5, image: prodCardamom, priceRange: "₨ 180–₨ 800" },
  { id: 9, name: "Ashwagandha | Asgand Nagori", price: 150, description: "Withania Somnifera root", category: "Herbs", rating: 5, image: prodGinger, priceRange: "₨ 150–₨ 1,500" },
  { id: 10, name: "Shikakai | Soap Pod | سکاکائی", price: 60, description: "Natural hair care herb", category: "Herbs", rating: 4, image: prodNeem, priceRange: "₨ 60–₨ 650" },
  { id: 11, name: "White Pepper Whole | Safeed Mirch", price: 320, description: "Premium whole white pepper", category: "Spices", rating: 4, image: prodBlackPepper, priceRange: "₨ 320–₨ 620" },
  { id: 12, name: "Zeera Sabat Safeed (White Cumin)", price: 150, description: "Whole white cumin seeds", category: "Spices", rating: 4, image: prodCardamom, priceRange: "₨ 150–₨ 450" },
];

export const categories = [
  "Arqiyat",
  "Dry Fruits",
  "Fruit Preserves",
  "Herbal Oils",
  "Herbs",
  "Spices",
];
