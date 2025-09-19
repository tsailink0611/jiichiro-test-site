import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import { ProductBlock } from "@/components/ProductBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* News Section */}
      <NewsSection />

      {/* Product Sections */}
      <ProductBlock
        title="抹茶のバウムクーヘン"
        description={`深い抹茶の香りと上品な甘さが絶妙に調和した、当店自慢のバウムクーヘンです。

職人が一層一層丁寧に焼き上げ、しっとりとした食感と濃厚な抹茶の風味をお楽しみいただけます。

お茶の時間や大切な方への贈り物にも最適です。`}
        image="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23404B15'/%3E%3Ctext x='50%25' y='50%25' font-size='32' fill='white' text-anchor='middle' dy='0.3em'%3E抹茶バウムクーヘン%3C/text%3E%3C/svg%3E"
        cta="抹茶バウムクーヘンを見る"
      />

      <ProductBlock
        title="プレーンバウムクーヘン"
        description={`シンプルでありながら奥深い味わいの定番バウムクーヘン。

厳選された材料を使用し、伝統的な製法で丁寧に焼き上げました。

素材本来の美味しさを存分に味わえる、当店の原点となる一品です。`}
        image="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23D4A574'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='0.3em'%3Eプレーンバウムクーヘン%3C/text%3E%3C/svg%3E"
        reverse
        cta="プレーンバウムクーヘンを見る"
      />

      <ProductBlock
        title="季節限定ギフトセット"
        description={`四季折々の味わいを楽しめる特別なギフトセット。

春は桜、夏は柑橘、秋は栗、冬は抹茶など、その時期ならではの風味をお届けします。

大切な方への贈り物や特別な日のお祝いにぜひご利用ください。`}
        image="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%238B4513'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='0.3em'%3E季節限定ギフトセット%3C/text%3E%3C/svg%3E"
        cta="ギフトセットを見る"
      />

      <Footer />
    </>
  );
}