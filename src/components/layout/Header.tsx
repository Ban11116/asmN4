import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500 sm:hidden" />
            <h1 className="text-2xl font-bold text-purple-600 ml-2 sm:ml-0">BSP</h1>
          </div>
          
          <nav className="hidden sm:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600">Trang chủ</a>
            <a href="/menu" className="text-gray-700 hover:text-purple-600">Giới thiệu </a>
            <a href="/promotions" className="text-gray-700 hover:text-purple-600">Tin tức </a>
            <a href="/about" className="text-gray-700 hover:text-purple-600">Liên Hệ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-purple-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}