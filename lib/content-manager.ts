// コンテンツ管理システム - ビジネスパートナー向けデモ用

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
}

export interface ProductContent {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  reverse?: boolean;
}

export interface NewsContent {
  id: string;
  title: string;
  date: string;
  summary: string;
}

export interface SiteContent {
  hero: HeroContent;
  products: ProductContent[];
  news: NewsContent[];
  lastUpdated: string;
}

// デフォルトコンテンツ
export const defaultContent: SiteContent = {
  hero: {
    title: "治一郎 - 極上のバウムクーヘン",
    subtitle: "職人の技が生み出す、しっとりとした極上の味わい",
    ctaText: "商品を見る"
  },
  products: [
    {
      id: "matcha",
      title: "抹茶のバウムクーヘン",
      description: `深い抹茶の香りと上品な甘さが絶妙に調和した、当店自慢のバウムクーヘンです。

職人が一層一層丁寧に焼き上げ、しっとりとした食感と濃厚な抹茶の風味をお楽しみいただけます。

お茶の時間や大切な方への贈り物にも最適です。`,
      image: "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23404B15'/%3E%3Ctext x='50%25' y='50%25' font-size='32' fill='white' text-anchor='middle' dy='0.3em'%3E抹茶バウムクーヘン%3C/text%3E%3C/svg%3E",
      cta: "抹茶バウムクーヘンを見る",
      reverse: false
    },
    {
      id: "plain",
      title: "プレーンバウムクーヘン",
      description: `シンプルでありながら奥深い味わいの定番バウムクーヘン。

厳選された材料を使用し、伝統的な製法で丁寧に焼き上げました。

素材本来の美味しさを存分に味わえる、当店の原点となる一品です。`,
      image: "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23D4A574'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='0.3em'%3Eプレーンバウムクーヘン%3C/text%3E%3C/svg%3E",
      cta: "プレーンバウムクーヘンを見る",
      reverse: true
    },
    {
      id: "gift",
      title: "季節限定ギフトセット",
      description: `四季折々の味わいを楽しめる特別なギフトセット。

春は桜、夏は柑橘、秋は栗、冬は抹茶など、その時期ならではの風味をお届けします。

大切な方への贈り物や特別な日のお祝いにぜひご利用ください。`,
      image: "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%238B4513'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='0.3em'%3E季節限定ギフトセット%3C/text%3E%3C/svg%3E",
      cta: "ギフトセットを見る",
      reverse: false
    }
  ],
  news: [
    {
      id: "news1",
      title: "新商品「黒ごまバウムクーヘン」登場",
      date: "2024.09.20",
      summary: "香ばしい黒ごまの風味豊かな新商品が登場しました。"
    },
    {
      id: "news2",
      title: "秋の限定ギフトセット販売開始",
      date: "2024.09.15",
      summary: "栗と柿の味わいを楽しめる秋限定セットを販売開始。"
    },
    {
      id: "news3",
      title: "店舗改装のお知らせ",
      date: "2024.09.10",
      summary: "より快適にお買い物いただけるよう店舗を改装いたします。"
    }
  ],
  lastUpdated: new Date().toISOString()
};

// コンテンツ管理クラス
export class ContentManager {
  private static STORAGE_KEY = 'jiichiro-site-content';

  // コンテンツを取得
  static getContent(): SiteContent {
    if (typeof window === 'undefined') {
      return defaultContent;
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load content:', error);
    }

    return defaultContent;
  }

  // コンテンツを保存
  static saveContent(content: SiteContent): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      content.lastUpdated = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(content));

      // カスタムイベントを発火してページに変更を通知
      window.dispatchEvent(new CustomEvent('content-updated', {
        detail: content
      }));
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  }

  // 初期データをリセット
  static resetToDefault(): void {
    this.saveContent(defaultContent);
  }

  // ヒーローコンテンツを更新
  static updateHero(hero: HeroContent): void {
    const current = this.getContent();
    current.hero = hero;
    this.saveContent(current);
  }

  // 商品を更新
  static updateProduct(productId: string, product: ProductContent): void {
    const current = this.getContent();
    const index = current.products.findIndex(p => p.id === productId);
    if (index >= 0) {
      current.products[index] = product;
      this.saveContent(current);
    }
  }

  // 商品を追加
  static addProduct(product: ProductContent): void {
    const current = this.getContent();
    current.products.push(product);
    this.saveContent(current);
  }

  // 商品を削除
  static removeProduct(productId: string): void {
    const current = this.getContent();
    current.products = current.products.filter(p => p.id !== productId);
    this.saveContent(current);
  }

  // ニュースを更新
  static updateNews(news: NewsContent[]): void {
    const current = this.getContent();
    current.news = news;
    this.saveContent(current);
  }
}