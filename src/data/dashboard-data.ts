import prodSaffron from "@/assets/prod-saffron.jpg";
import prodAnardana from "@/assets/prod-anardana.jpg";
import prodKaliMirch from "@/assets/prod-kali-mirch.jpg";
import prodBlackPepper from "@/assets/prod-black-pepper.jpg";
import prodGinger from "@/assets/prod-ginger.jpg";
import prodNeem from "@/assets/prod-neem.jpg";
import prodRedChilli from "@/assets/prod-red-chilli.jpg";
import prodCardamom from "@/assets/prod-cardamom.jpg";

export interface AdminProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  categoryId: string;
  image: string;
  status: "active" | "draft";
  createdAt: string;
  priceRange?: string;
  rating?: number;
}

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  parentId?: string;
  status: "active" | "inactive";
  createdAt: string;
}

export interface AdminOrder {
  id: string;
  customer: string;
  email: string;
  phone?: string;
  address?: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: number;
  createdAt: string;
  notes?: string;
}

const defaultCategories: AdminCategory[] = [
  { id: "cat-1", name: "Herbs", slug: "herbs", description: "Natural medicinal herbs", status: "active", createdAt: "2025-01-10" },
  { id: "cat-2", name: "Spices", slug: "spices", description: "Premium quality spices", status: "active", createdAt: "2025-01-10" },
  { id: "cat-3", name: "Dry Fruits", slug: "dry-fruits", description: "Dried fruits and nuts", status: "active", createdAt: "2025-01-12" },
  { id: "cat-4", name: "Herbal Oils", slug: "herbal-oils", description: "Essential and herbal oils", status: "active", createdAt: "2025-01-15" },
  { id: "cat-5", name: "Arqiyat", slug: "arqiyat", description: "Traditional herbal distillates", status: "active", createdAt: "2025-01-18" },
  { id: "cat-6", name: "Fruit Preserves", slug: "fruit-preserves", description: "Natural fruit preserves and jams", status: "active", createdAt: "2025-02-01" },
];

const defaultProducts: AdminProduct[] = [
  { id: "prod-1", name: "Saffron | Zafran | زعفران", price: 1450, stock: 25, categoryId: "cat-1", image: prodSaffron, status: "active", description: "Premium quality saffron threads", createdAt: "2025-02-01", rating: 5 },
  { id: "prod-2", name: "Pomegranate Seeds | Annar Dana | اناردانہ", price: 120, compareAtPrice: 220, stock: 60, categoryId: "cat-3", image: prodAnardana, status: "active", description: "Dried pomegranate seeds", createdAt: "2025-02-03", rating: 4, priceRange: "₨ 120–₨ 220" },
  { id: "prod-3", name: "Kali Mirch Powder (Black Pepper Powder)", price: 550, compareAtPrice: 700, stock: 40, categoryId: "cat-2", image: prodKaliMirch, status: "active", description: "Premium ground black pepper", createdAt: "2025-02-05", rating: 5 },
  { id: "prod-4", name: "Kali Mirch Sabat (Black Pepper Whole)", price: 180, stock: 45, categoryId: "cat-2", image: prodBlackPepper, status: "active", description: "Whole black peppercorns", createdAt: "2025-02-08", rating: 4, priceRange: "₨ 180–₨ 550" },
  { id: "prod-5", name: "Ginger | Sund | سنڈھ", price: 210, stock: 35, categoryId: "cat-1", image: prodGinger, status: "active", description: "Dried ginger powder", createdAt: "2025-02-10", rating: 5 },
  { id: "prod-6", name: "Neem | نیم", price: 60, stock: 80, categoryId: "cat-1", image: prodNeem, status: "active", description: "Pure neem leaves powder", createdAt: "2025-02-12", rating: 4 },
  { id: "prod-7", name: "Lal Mirch Darla - Red Chilli Powder", price: 120, stock: 55, categoryId: "cat-2", image: prodRedChilli, status: "active", description: "Premium red chilli powder", createdAt: "2025-02-15", rating: 5, priceRange: "₨ 120–₨ 450" },
  { id: "prod-8", name: "Sabz Elaichi (Green Cardamom)", price: 180, stock: 3, categoryId: "cat-2", image: prodCardamom, status: "active", description: "Fragrant green cardamom pods", createdAt: "2025-02-18", rating: 5, priceRange: "₨ 180–₨ 800" },
  { id: "prod-9", name: "Ashwagandha | Asgand Nagori", price: 150, stock: 2, categoryId: "cat-1", image: prodGinger, status: "active", description: "Withania Somnifera root", createdAt: "2025-03-01", rating: 5, priceRange: "₨ 150–₨ 1,500" },
  { id: "prod-10", name: "Shikakai | Soap Pod | سکاکائی", price: 60, stock: 70, categoryId: "cat-1", image: prodNeem, status: "active", description: "Natural hair care herb", createdAt: "2025-03-05", rating: 4, priceRange: "₨ 60–₨ 650" },
  { id: "prod-11", name: "White Pepper Whole | Safeed Mirch", price: 320, stock: 30, categoryId: "cat-2", image: prodBlackPepper, status: "active", description: "Premium whole white pepper", createdAt: "2025-03-08", rating: 4, priceRange: "₨ 320–₨ 620" },
  { id: "prod-12", name: "Zeera Sabat Safeed (White Cumin)", price: 150, stock: 50, categoryId: "cat-2", image: prodCardamom, status: "active", description: "Whole white cumin seeds", createdAt: "2025-03-10", rating: 4, priceRange: "₨ 150–₨ 450" },
];

const defaultOrders: AdminOrder[] = [
  { id: "ORD-1001", customer: "Ahmed Khan", email: "ahmed@email.com", phone: "+92 300 1234567", address: "123 Main St, Lahore", total: 2850, status: "delivered", items: 3, createdAt: "2025-03-20", notes: "" },
  { id: "ORD-1002", customer: "Sara Ali", email: "sara@email.com", phone: "+92 321 7654321", address: "45 Garden Town, Karachi", total: 550, status: "shipped", items: 1, createdAt: "2025-03-22", notes: "" },
  { id: "ORD-1003", customer: "Usman Raza", email: "usman@email.com", phone: "+92 333 9876543", address: "78 Blue Area, Islamabad", total: 1670, status: "processing", items: 4, createdAt: "2025-03-25", notes: "Urgent delivery" },
  { id: "ORD-1004", customer: "Fatima Noor", email: "fatima@email.com", phone: "+92 312 5551234", address: "10 Model Town, Lahore", total: 390, status: "pending", items: 2, createdAt: "2025-03-28", notes: "" },
  { id: "ORD-1005", customer: "Bilal Shah", email: "bilal@email.com", phone: "+92 345 1112233", address: "22 Saddar, Peshawar", total: 1450, status: "cancelled", items: 1, createdAt: "2025-03-30", notes: "Customer requested cancellation" },
];

function getStore<T>(key: string, defaults: T[]): T[] {
  const stored = localStorage.getItem(key);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(key, JSON.stringify(defaults));
  return defaults;
}

function setStore<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Products CRUD
export const getProducts = (): AdminProduct[] => getStore("admin_products", defaultProducts);
export const saveProducts = (p: AdminProduct[]) => setStore("admin_products", p);
export const addProduct = (p: AdminProduct) => { const all = getProducts(); all.push(p); saveProducts(all); };
export const updateProduct = (p: AdminProduct) => { const all = getProducts().map(x => x.id === p.id ? p : x); saveProducts(all); };
export const deleteProduct = (id: string) => { saveProducts(getProducts().filter(x => x.id !== id)); };

// Categories CRUD
export const getCategories = (): AdminCategory[] => getStore("admin_categories", defaultCategories);
export const saveCategories = (c: AdminCategory[]) => setStore("admin_categories", c);
export const addCategory = (c: AdminCategory) => { const all = getCategories(); all.push(c); saveCategories(all); };
export const updateCategory = (c: AdminCategory) => { const all = getCategories().map(x => x.id === c.id ? c : x); saveCategories(all); };
export const deleteCategory = (id: string) => { saveCategories(getCategories().filter(x => x.id !== id)); };

// Orders CRUD
export const getOrders = (): AdminOrder[] => getStore("admin_orders", defaultOrders);
export const saveOrders = (o: AdminOrder[]) => setStore("admin_orders", o);
export const addOrder = (o: AdminOrder) => { const all = getOrders(); all.push(o); saveOrders(all); };
export const updateOrder = (o: AdminOrder) => { const all = getOrders().map(x => x.id === o.id ? o : x); saveOrders(all); };
export const deleteOrder = (id: string) => { saveOrders(getOrders().filter(x => x.id !== id)); };

// Reset to defaults (useful for syncing)
export const resetProducts = () => { localStorage.removeItem("admin_products"); };
export const resetCategories = () => { localStorage.removeItem("admin_categories"); };
