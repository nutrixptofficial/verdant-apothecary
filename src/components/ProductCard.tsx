import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart, Product } from "@/contexts/CartContext";
import { getProductGradient } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
      <div
        className="h-48 w-full flex items-center justify-center text-primary-foreground font-heading text-lg"
        style={{ background: getProductGradient(product.id) }}
      >
        {product.name}
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-heading font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < product.rating ? "fill-accent text-accent" : "text-muted"}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="font-heading text-lg font-bold text-primary">₹{product.price}</span>
          <Button size="sm" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
