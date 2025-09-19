"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    src: "data:image/svg+xml,%3Csvg width='1300' height='768' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23404B15'/%3E%3C/svg%3E",
    alt: "抹茶バウムクーヘン メインビジュアル1",
    title: "抹茶のバウムクーヘン",
    subtitle: "深い味わいと上品な香り"
  },
  {
    src: "data:image/svg+xml,%3Csvg width='1300' height='768' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%236B7F2B'/%3E%3C/svg%3E",
    alt: "抹茶バウムクーヘン メインビジュアル2",
    title: "職人の技が光る",
    subtitle: "一層一層丁寧に焼き上げ"
  },
  {
    src: "data:image/svg+xml,%3Csvg width='1300' height='768' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%238FA040'/%3E%3C/svg%3E",
    alt: "抹茶バウムクーヘン メインビジュアル3",
    title: "贈り物にも最適",
    subtitle: "特別な日を彩る上質な味"
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  // アクティブなスライドのみレンダリング
  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-16 md:mb-24">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-50' : 'opacity-100'
        }`}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${activeSlide.src}")`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="font-serif-jp text-3xl font-bold md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
              {activeSlide.title}
            </h1>
            <p className="font-sans-jp text-base md:text-lg lg:text-xl drop-shadow-md">
              {activeSlide.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-brand scale-125"
                : "bg-white/70 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}