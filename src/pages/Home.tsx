import React, { useEffect, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import { type Product } from "../types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10))); // Lấy 5 sản phẩm đầu
  }, []);

  return (
    <div>
      {/* Hero Section (Banner) */}
      <section className="relative h-[500px] w-full">
        <img
          src="https://inan2h.vn/wp-content/uploads/2023/01/in-banner-tra-sua-11.jpg"
          alt="Bubble Tea Banner"
          className="w-full h-full object-cover"
        />
  
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
       Danh Mục Trà Sữa 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
