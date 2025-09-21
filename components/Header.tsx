"use client";

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="font-serif-jp text-2xl font-bold text-stone-800">
              梵天庵
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-gray-700 hover:text-stone-800 transition-all duration-300 hover:underline underline-offset-4 font-medium">梵天庵について</a>
            <a href="/products" className="text-gray-700 hover:text-stone-800 transition-all duration-300 hover:underline underline-offset-4 font-medium">商品紹介</a>
            <a href="/tradition" className="text-gray-700 hover:text-stone-800 transition-all duration-300 hover:underline underline-offset-4 font-medium">伝統</a>
            <a href="/company" className="text-gray-700 hover:text-stone-800 transition-all duration-300 hover:underline underline-offset-4 font-medium">会社概要</a>
            <a href="/contact" className="text-gray-700 hover:text-stone-800 transition-all duration-300 hover:underline underline-offset-4 font-medium">お問い合わせ</a>
            <a href="/access" className="text-gray-700 hover:text-stone-800 transition-all duration-300 hover:underline underline-offset-4 font-medium">アクセス</a>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-stone-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/about" className="text-gray-700 hover:text-stone-800 transition-colors py-2">梵天庵について</a>
              <a href="/products" className="text-gray-700 hover:text-stone-800 transition-colors py-2">商品紹介</a>
              <a href="/tradition" className="text-gray-700 hover:text-stone-800 transition-colors py-2">伝統</a>
              <a href="/company" className="text-gray-700 hover:text-stone-800 transition-colors py-2">会社概要</a>
              <a href="/contact" className="text-gray-700 hover:text-stone-800 transition-colors py-2">お問い合わせ</a>
              <a href="/access" className="text-gray-700 hover:text-stone-800 transition-colors py-2">アクセス</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
