import { useState, useEffect, useMemo } from "react";
import { fetchAllProducts, type Product } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

  return (
    <main className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Discover Products
        </h1>
        <p className="mt-2 text-muted-foreground">
          Browse our curated collection
        </p>
        <div className="mt-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {loading && <Loader />}

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center text-sm text-destructive">
          {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <p className="text-center text-muted-foreground">No products found.</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
