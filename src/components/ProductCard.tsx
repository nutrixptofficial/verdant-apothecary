import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const hasVariants = !!product.priceRange;

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={300}
          height={300}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded">
            Sale!
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₨ {product.originalPrice.toLocaleString()}</span>
          )}
          {product.priceRange ? (
            <span className="text-sm font-semibold text-foreground">{product.priceRange}</span>
          ) : (
            <span className="text-sm font-semibold text-foreground">₨ {product.price.toLocaleString()}</span>
          )}
        </div>
        <div className="pt-1">
          {hasVariants ? (
            <Button
              size="sm"
              variant="outline"
              className="w-full text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => addToCart(product)}
            >
              Select options
            </Button>
          ) : (
            <Button
              size="sm"
              className="w-full text-xs"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
