import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import productsData from "../data/productsData.json";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="p-4 max-w-10xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/5">
        <h2 className="font-semibold text-lg mb-4">Category</h2>
        <div className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </aside>     
        <section className="md:w-3/4 w-full">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}