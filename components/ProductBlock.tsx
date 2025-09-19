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
  cta = "商品を見る",
  ctaLink = "#"
}: Product) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className={`mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12 grid items-center gap-12 md:gap-16 lg:gap-20 md:grid-cols-2 ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}>
        {/* Text Content */}
        <div className="space-y-8">
          <h2 className="font-serif-jp text-3xl md:text-4xl lg:text-5xl font-bold text-brand leading-tight">
            {title}
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            {description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-6 md:pt-8">
            <a
              href={ctaLink}
              className="group inline-flex items-center bg-brand text-white px-10 py-4 rounded-xl hover:bg-brand/90 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 font-medium text-lg"
            >
              {cta}
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative group">
          <div className="w-full h-72 md:h-96 lg:h-[28rem] rounded-xl shadow-xl group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-brand flex items-center justify-center">
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-serif-jp font-bold text-center px-6">
              {title}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
}