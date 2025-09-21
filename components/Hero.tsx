"use client";

import { useState, useEffect, useRef } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const slides = [
  {
    gradient: "from-stone-900 via-stone-800 to-stone-700",
    title: "梵天庵",
    subtitle: "伝統の技が織りなす至極の味わい"
  },
  {
    gradient: "from-stone-800 via-stone-700 to-stone-600",
    title: "職人の心",
    subtitle: "一層一層に込められた想い"
  },
  {
    gradient: "from-stone-700 via-stone-600 to-stone-500",
    title: "極上の時間",
    subtitle: "味わう瞬間、感じる幸せ"
  }
];

export default function Hero({ 
  title = "梵天庵", 
  subtitle = "伝統と革新が紡ぐ、極上の味わい",
  ctaText = "体験する"
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Split title into characters for animation
  const titleChars = title.split('');
  const subtitleWords = subtitle.split(' ');

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-2000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" 
               style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/3 rounded-full animate-pulse" 
               style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/4 rounded-full animate-pulse" 
               style={{ animationDelay: '4s', animationDuration: '5s' }}></div>
        </div>
      ))}

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        {/* Main Title with Character Animation */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white leading-none tracking-wider">
            {titleChars.map((char, index) => (
              <span
                key={index}
                className={`inline-block transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Elegant Separator */}
        <div className={`w-32 h-px bg-white/60 mx-auto mb-12 transform transition-all duration-1500 delay-1000 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}></div>

        {/* Subtitle with Word Animation */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed tracking-wide">
            {subtitleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block transform transition-all duration-800 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${1200 + index * 200}ms`,
                  marginRight: '0.5rem'
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transform transition-all duration-1000 delay-2000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <a
            href="#products"
            className="group inline-flex items-center text-white border border-white/40 px-12 py-4 text-xl font-light tracking-wider hover:bg-white hover:text-stone-800 transition-all duration-700 backdrop-blur-sm bg-white/10"
          >
            {ctaText}
            <svg className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-sm font-light tracking-wider">SCROLL</div>
          <div className="w-px h-16 bg-white/40"></div>
        </div>
      </div>

      {/* Slide Progress */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group flex items-center space-x-3"
          >
            <div className={`h-px bg-white transition-all duration-500 ${
              index === currentSlide ? 'w-12 opacity-100' : 'w-6 opacity-40'
            }`}></div>
            <div className={`text-xs text-white font-light tracking-wider transition-all duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'
            }`}>
              {String(index + 1).padStart(2, '0')}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
