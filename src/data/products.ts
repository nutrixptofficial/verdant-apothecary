import { Product } from "@/contexts/CartContext";
import { getProducts, getCategories } from "@/data/dashboard-data";

// Build products from admin data so frontend and admin stay in sync
function buildProducts(): Product[] {
  const adminProducts = getProducts().filter(p => p.status === "active");
  const cats = getCategories();
  
  return adminProducts.map(p => {
    const cat = cats.find(c => c.id === p.categoryId);
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      description: p.description,
      category: cat?.name || "Uncategorized",
      rating: p.rating || 4,
      image: p.image,
      priceRange: p.priceRange,
      originalPrice: p.compareAtPrice,
    };
  });
}

function buildCategories(): string[] {
  return getCategories()
    .filter(c => c.status === "active")
    .map(c => c.name);
}

// Export as getters so they always reflect latest admin data
export const products: Product[] = buildProducts();
export const categories: string[] = buildCategories();

// For components that need fresh data (after admin edits)
export const getStorefrontProducts = buildProducts;
export const getStorefrontCategories = buildCategories;
