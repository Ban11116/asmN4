export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  toppings: Topping[];
  category: string;
}

export interface Topping {
  id: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  totalAmount: number;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  toppings: string[];
  note?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // This would be hashed in a real application
}