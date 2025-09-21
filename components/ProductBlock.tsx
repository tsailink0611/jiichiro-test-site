import Image from 'next/image';

type Product = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  cta?: string;
  ctaLink?: string;
};

export function ProductBlock({
  title,
  description,
  image,
  reverse = false,
  cta = "詳しく見る",
  ctaLink = "#"
}: Product) {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className={`mx-auto max-w-7xl px-8 md:px-12 lg:px-16 grid items-center gap-16 md:gap-20 lg:gap-28 md:grid-cols-2 ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}>
        {/* Text Content */}
        <div className="space-y-12 lg:space-y-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-stone-800 leading-tight tracking-wide mb-8">
              {title}
            </h2>
            <div className="w-20 h-0.5 bg-stone-400 mb-10"></div>
          </div>

          <div className="text-stone-600 text-xl md:text-2xl leading-relaxed space-y-8 font-light">
            {description.split('\n').map((paragraph, index) => (
              <p key={index} className="opacity-90">{paragraph}</p>
            ))}
          </div>

          <div className="pt-8">
            <a
              href={ctaLink}
              className="group inline-flex items-center text-stone-800 border-b-2 border-stone-300 hover:border-stone-600 pb-2 transition-all duration-700 font-medium text-lg tracking-wide"
            >
              {cta}
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-700 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image with subtle hover effect */}
        <div className="relative">
          <div className="w-full h-80 md:h-96 lg:h-[32rem] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 relative group">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {/* Fallback when no image */}
                <div className="text-center px-8">
                  <span className="text-stone-700 text-2xl md:text-3xl lg:text-4xl font-light tracking-wider">
                    {title}
                  </span>
                  <div className="mt-6">
                    <div className="w-16 h-16 mx-auto border border-stone-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-stone-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
