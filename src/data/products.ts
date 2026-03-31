import { Product } from "@/contexts/CartContext";

const gradients = [
  "linear-gradient(135deg, #2d5a27, #4a7c44)",
  "linear-gradient(135deg, #6b4226, #8b6242)",
  "linear-gradient(135deg, #2d5a27, #c8952c)",
  "linear-gradient(135deg, #4a7c44, #6b4226)",
  "linear-gradient(135deg, #c8952c, #6b4226)",
  "linear-gradient(135deg, #3a6b34, #2d5a27)",
  "linear-gradient(135deg, #5a3a1a, #c8952c)",
  "linear-gradient(135deg, #2d5a27, #5a8a54)",
];

export const products: Product[] = [
  { id: 1, name: "Ashwagandha Capsules", price: 499, description: "Stress relief & vitality booster", category: "Herbal Capsules", rating: 5 },
  { id: 2, name: "Tulsi Green Tea", price: 299, description: "Immunity boosting herbal tea blend", category: "Herbal Teas", rating: 4 },
  { id: 3, name: "Bhringraj Hair Oil", price: 399, description: "Promotes hair growth naturally", category: "Oils & Extracts", rating: 5 },
  { id: 4, name: "Neem Face Wash", price: 249, description: "Deep cleansing with neem extract", category: "Skincare", rating: 4 },
  { id: 5, name: "Giloy Immunity Tablets", price: 349, description: "Natural immunity enhancement", category: "Immunity Boosters", rating: 5 },
  { id: 6, name: "Triphala Churna", price: 199, description: "Digestive health & detox formula", category: "Digestive Care", rating: 4 },
  { id: 7, name: "Moringa Powder", price: 279, description: "Superfood packed with nutrients", category: "Herbal Capsules", rating: 5 },
  { id: 8, name: "Chamomile Tea", price: 349, description: "Calming & relaxation herbal tea", category: "Herbal Teas", rating: 4 },
  { id: 9, name: "Tea Tree Essential Oil", price: 449, description: "Antibacterial & skin purifier", category: "Oils & Extracts", rating: 5 },
  { id: 10, name: "Aloe Vera Gel", price: 199, description: "Soothing skin moisturizer", category: "Skincare", rating: 4 },
  { id: 11, name: "Amla Vitamin C Tabs", price: 329, description: "Natural vitamin C supplement", category: "Immunity Boosters", rating: 5 },
  { id: 12, name: "Psyllium Husk Powder", price: 179, description: "High fiber digestive support", category: "Digestive Care", rating: 4 },
];

export const getProductGradient = (id: number) => gradients[(id - 1) % gradients.length];

export const categories = [
  "Herbal Capsules",
  "Herbal Teas",
  "Oils & Extracts",
  "Skincare",
  "Immunity Boosters",
  "Digestive Care",
];
