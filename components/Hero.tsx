"use client";

import { useState, useEffect } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const slides = [
  {
    src: "data:image/svg+xml,%3Csvg width='1300' height='768' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23404B15'/%3E%3C/svg%3E",
    alt: "治一郎バウムクーヘン メインビジュアル1",
    title: "抹茶のバウムクーヘン",
    subtitle: "深い味わいと上品な香り"
  },
  {
    src: "data:image/svg+xml,%3Csvg width='1300' height='768' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%236B7F2B'/%3E%3C/svg%3E",
    alt: "治一郎バウムクーヘン メインビジュアル2", 
    title: "職人の技が光る",
    subtitle: "一層一層丁寧に焼き上げ"
  },
  {
    src: "data:image/svg+xml,%3Csvg width='1300' height='768' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%238FA040'/%3E%3C/svg%3E",
    alt: "治一郎バウムクーヘン メインビジュアル3",
    title: "贈り物にも最適",
    subtitle: "心を込めた美味しさ"
  }
];

export default function Hero({ 
  title = "治一郎 - 極上のバウムクーヘン", 
  subtitle = "職人の技が生み出す、しっとりとした極上の味わい",
  ctaText = "商品を見る"
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed opacity-90">
            {subtitle}
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {ctaText}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
