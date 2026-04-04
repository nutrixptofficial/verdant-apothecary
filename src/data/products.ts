import { Product } from "@/contexts/CartContext";
import { getProducts, getCategories } from "@/data/dashboard-data";

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
      images: p.images || [p.image],
      priceRange: p.priceRange,
      originalPrice: p.compareAtPrice,
      variants: p.variants,
    };
  });
}

function buildCategories(): string[] {
  return getCategories()
    .filter(c => c.status === "active")
    .map(c => c.name);
}

export const products: Product[] = buildProducts();
export const categories: string[] = buildCategories();

export const getStorefrontProducts = buildProducts;
export const getStorefrontCategories = buildCategories;
