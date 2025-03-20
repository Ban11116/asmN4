import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartItem } from "../types";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");

        if (Array.isArray(response.data)) {
          const orders = response.data;

          const cartItems: CartItem[] = orders
            .flatMap((order) => order.products || []) 
            .map((product) => ({
              id: Number(product.id), 
              name: product.name || "Sản phẩm không xác định",
              price: Number(product.price) || 0, 
              quantity: Number(product.quantity) || 1, 
            }));

          setCart(cartItems);
        } else {
          console.error("Dữ liệu API không hợp lệ:", response.data);
          setCart([]);
        }
      } catch (error) {
        console.error("Lỗi khi tải giỏ hàng:", error);
        setCart([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
      0
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Giỏ hàng</h2>

      {loading ? (
        <p>Đang tải giỏ hàng...</p>
      ) : cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-700">{(Number(item.price) || 0).toLocaleString()} đ</p>
              </div>
              <div className="flex items-center">
                <button className="px-2 py-1 bg-gray-200 rounded" >
                  -
                </button>
                <span className="mx-2">{Number(item.quantity) || 1}</span>
                <button className="px-2 py-1 bg-gray-200 rounded" >
                  +
                </button>
                <button className="ml-4 text-red-500" >
                  Xóa
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right font-semibold text-lg">
            Tổng: {calculateTotal().toLocaleString()} đ
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
