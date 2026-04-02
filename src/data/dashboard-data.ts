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
}

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId?: string;
  status: "active" | "inactive";
  createdAt: string;
}

export interface AdminOrder {
  id: string;
  customer: string;
  email: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: number;
  createdAt: string;
}

const defaultCategories: AdminCategory[] = [
  { id: "cat-1", name: "Herbs", slug: "herbs", description: "Natural medicinal herbs", status: "active", createdAt: "2025-01-10" },
  { id: "cat-2", name: "Spices", slug: "spices", description: "Premium quality spices", status: "active", createdAt: "2025-01-10" },
  { id: "cat-3", name: "Dry Fruits", slug: "dry-fruits", description: "Dried fruits and nuts", status: "active", createdAt: "2025-01-12" },
  { id: "cat-4", name: "Herbal Oils", slug: "herbal-oils", description: "Essential and herbal oils", status: "active", createdAt: "2025-01-15" },
  { id: "cat-5", name: "Arqiyat", slug: "arqiyat", description: "Traditional herbal distillates", status: "active", createdAt: "2025-01-18" },
  { id: "cat-6", name: "Fruit Preserves", slug: "fruit-preserves", description: "Natural fruit preserves and jams", status: "inactive", createdAt: "2025-02-01" },
];

const defaultProducts: AdminProduct[] = [
  { id: "prod-1", name: "Saffron | Zafran", price: 1450, stock: 25, categoryId: "cat-1", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Premium quality saffron threads", createdAt: "2025-02-01" },
  { id: "prod-2", name: "Pomegranate Seeds | Annar Dana", price: 120, compareAtPrice: 180, stock: 60, categoryId: "cat-3", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Dried pomegranate seeds", createdAt: "2025-02-03" },
  { id: "prod-3", name: "Black Pepper Powder | Kali Mirch", price: 550, compareAtPrice: 700, stock: 40, categoryId: "cat-2", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Premium ground black pepper", createdAt: "2025-02-05" },
  { id: "prod-4", name: "Green Cardamom | Sabz Elaichi", price: 180, stock: 3, categoryId: "cat-2", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Fragrant green cardamom pods", createdAt: "2025-02-08" },
  { id: "prod-5", name: "Ginger Powder | Sund", price: 210, stock: 35, categoryId: "cat-1", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Dried ginger powder", createdAt: "2025-02-10" },
  { id: "prod-6", name: "Neem Powder", price: 60, stock: 80, categoryId: "cat-1", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "draft", description: "Pure neem leaves powder", createdAt: "2025-02-12" },
  { id: "prod-7", name: "Red Chilli Powder | Lal Mirch", price: 120, stock: 55, categoryId: "cat-2", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Premium red chilli powder", createdAt: "2025-02-15" },
  { id: "prod-8", name: "Ashwagandha | Asgand Nagori", price: 150, stock: 2, categoryId: "cat-1", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200", status: "active", description: "Withania Somnifera root", createdAt: "2025-03-01" },
];

const defaultOrders: AdminOrder[] = [
  { id: "ORD-1001", customer: "Ahmed Khan", email: "ahmed@email.com", total: 2850, status: "delivered", items: 3, createdAt: "2025-03-20" },
  { id: "ORD-1002", customer: "Sara Ali", email: "sara@email.com", total: 550, status: "shipped", items: 1, createdAt: "2025-03-22" },
  { id: "ORD-1003", customer: "Usman Raza", email: "usman@email.com", total: 1670, status: "processing", items: 4, createdAt: "2025-03-25" },
  { id: "ORD-1004", customer: "Fatima Noor", email: "fatima@email.com", total: 390, status: "pending", items: 2, createdAt: "2025-03-28" },
  { id: "ORD-1005", customer: "Bilal Shah", email: "bilal@email.com", total: 1450, status: "cancelled", items: 1, createdAt: "2025-03-30" },
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

// Orders (read-only mock)
export const getOrders = (): AdminOrder[] => getStore("admin_orders", defaultOrders);
