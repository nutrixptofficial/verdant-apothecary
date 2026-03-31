import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCat = (cat: string) => {
    setSelectedCats((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCats.length === 0 || selectedCats.includes(p.category);
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesRating = p.rating >= minRating;
      return matchesSearch && matchesCat && matchesPrice && matchesRating;
    });
  }, [search, selectedCats, priceRange, minRating]);

  return (
    <div className="container mx-auto section-padding">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Our Products</h1>

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <Button variant="outline" className="mb-6 lg:hidden" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </Button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <aside className={`w-full lg:w-64 shrink-0 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
          <div>
            <h3 className="font-heading font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    id={cat}
                    checked={selectedCats.includes(cat)}
                    onCheckedChange={() => toggleCat(cat)}
                  />
                  <Label htmlFor={cat} className="text-sm cursor-pointer">{cat}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Price Range</h3>
            <Slider
              min={0}
              max={500}
              step={50}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <p className="text-sm text-muted-foreground">₹{priceRange[0]} — ₹{priceRange[1]}</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Min Rating</h3>
            <div className="flex gap-2">
              {[0, 3, 4, 5].map((r) => (
                <Button
                  key={r}
                  size="sm"
                  variant={minRating === r ? "default" : "outline"}
                  onClick={() => setMinRating(r)}
                >
                  {r === 0 ? "All" : `${r}★+`}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
