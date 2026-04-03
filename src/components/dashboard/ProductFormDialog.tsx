import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { AdminProduct, getCategories } from "@/data/dashboard-data";
import ImageUpload from "./ImageUpload";

const schema = z.object({
  name: z.string().trim().min(1, "Product name is required").max(200),
  description: z.string().max(2000).optional(),
  price: z.coerce.number().positive("Price must be positive"),
  compareAtPrice: z.coerce.number().positive().optional().or(z.literal("")),
  stock: z.coerce.number().int().min(0, "Stock cannot be negative"),
  categoryId: z.string().min(1, "Category is required"),
  image: z.string().min(1, "Image is required"),
  priceRange: z.string().max(50).optional(),
  status: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: AdminProduct | null;
  onSave: (product: AdminProduct) => void;
}

const ProductFormDialog = ({ open, onOpenChange, product, onSave }: Props) => {
  const categories = getCategories().filter(c => c.status === "active");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", description: "", price: 0, compareAtPrice: "",
      stock: 0, categoryId: "", image: "", priceRange: "", status: true,
    },
  });

  useEffect(() => {
    if (product) {
      form.reset({
        name: product.name,
        description: product.description,
        price: product.price,
        compareAtPrice: product.compareAtPrice || "",
        stock: product.stock,
        categoryId: product.categoryId,
        image: product.image,
        priceRange: product.priceRange || "",
        status: product.status === "active",
      });
    } else {
      form.reset({
        name: "", description: "", price: 0, compareAtPrice: "",
        stock: 0, categoryId: "", image: "", priceRange: "", status: true,
      });
    }
  }, [product, open, form]);

  const onSubmit = (values: FormValues) => {
    const data: AdminProduct = {
      id: product?.id || `prod-${Date.now()}`,
      name: values.name,
      description: values.description || "",
      price: values.price,
      compareAtPrice: typeof values.compareAtPrice === "number" ? values.compareAtPrice : undefined,
      stock: values.stock,
      categoryId: values.categoryId,
      image: values.image || "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200",
      status: values.status ? "active" : "draft",
      createdAt: product?.createdAt || new Date().toISOString().split("T")[0],
      priceRange: values.priceRange || undefined,
    };
    onSave(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name *</FormLabel>
                <FormControl><Input placeholder="e.g. Saffron" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="description" render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl><Textarea placeholder="Product description..." rows={3} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="price" render={({ field }) => (
                <FormItem>
                  <FormLabel>Price (₨) *</FormLabel>
                  <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="compareAtPrice" render={({ field }) => (
                <FormItem>
                  <FormLabel>Compare at Price</FormLabel>
                  <FormControl><Input type="number" step="0.01" placeholder="Optional" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="stock" render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock *</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="categoryId" render={({ field }) => (
                <FormItem>
                  <FormLabel>Category *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map(c => (
                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField control={form.control} name="priceRange" render={({ field }) => (
              <FormItem>
                <FormLabel>Price Range (optional)</FormLabel>
                <FormControl><Input placeholder="e.g. ₨ 120–₨ 450" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="image" render={({ field }) => (
              <FormItem>
                <FormLabel>Product Image *</FormLabel>
                <FormControl>
                  <ImageUpload value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="status" render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-lg border border-border p-3">
                <FormLabel className="!mt-0">Active</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )} />

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
              <Button type="submit">{product ? "Update" : "Create"} Product</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormDialog;
