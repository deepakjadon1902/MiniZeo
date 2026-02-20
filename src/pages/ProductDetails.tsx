import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { fetchProductById, type Product } from "@/services/productService";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchProductById(Number(id))
      .then(setProduct)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdd = () => {
    if (!product) return;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      },
    });
    toast.success(`${product.title} added to cart`);
  };

  if (loading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-24 rounded bg-secondary" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-square rounded-lg bg-secondary" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 rounded bg-secondary" />
              <div className="h-6 w-24 rounded bg-secondary" />
              <div className="h-20 rounded bg-secondary" />
              <div className="h-10 w-40 rounded bg-secondary" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-8">
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center text-sm text-destructive">
          {error || "Product not found"}
        </div>
      </div>
    );
  }

  return (
    <main className="container py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-border bg-secondary">
          <img
            src={product.images[0] || product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {product.title}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-2">
            {product.stock > 0 ? (
              <span className="text-sm font-medium text-primary">
                In Stock ({product.stock})
              </span>
            ) : (
              <span className="text-sm font-medium text-destructive">
                Out of Stock
              </span>
            )}
          </div>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <button
            onClick={handleAdd}
            disabled={product.stock === 0}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
