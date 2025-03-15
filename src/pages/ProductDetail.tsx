import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type Product } from "../types";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Đang tải...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <p className="text-purple-600 text-2xl font-semibold mt-4">
  {Number(product.price).toLocaleString("vi-VN")}đ
</p>

          <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
