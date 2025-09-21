// 拡張版コンテンツ管理システム - LocalStorage + Firestore連携

import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore'
import { firestore } from './firebase'

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
  siteId?: string;
}

// CMSサイトスタジオ用のデフォルトコンテンツ
export const defaultContent: SiteContent = {
  hero: {
    title: "CMSサイトスタジオ - デモコンテンツ",
    subtitle: "シンプルで直感的なコンテンツ管理システム",
    ctaText: "管理画面を見る"
  },
  products: [
    {
      id: "modern-template",
      title: "モダンテンプレート",
      description: `最新のデザイントレンドを取り入れたテンプレート。

レスポンシブデザインで、どのデバイスでも美しく表示されます。

ビジネス、ポートフォリオ、ブログなど様々な用途に対応。`,
      image: "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' font-size='32' fill='white' text-anchor='middle' dy='0.3em'%3Eモダンテンプレート%3C/text%3E%3C/svg%3E",
      cta: "テンプレートを見る",
      reverse: false
    },
    {
      id: "minimal-template",
      title: "ミニマルテンプレート",
      description: `シンプルで洗練されたデザインのテンプレート。

コンテンツに集中できる、余計な装飾を排除したスタイル。

高速表示と優れた読みやすさを実現。`,
      image: "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f093fb'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='0.3em'%3Eミニマルテンプレート%3C/text%3E%3C/svg%3E",
      cta: "テンプレートを見る",
      reverse: true
    },
    {
      id: "business-template",
      title: "ビジネステンプレート",
      description: `企業サイトに最適化されたプロフェッショナルテンプレート。

信頼性と実績をアピールできるデザイン要素が充実。

お問い合わせフォームやサービス紹介に特化。`,
      image: "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%2343cea2'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='0.3em'%3Eビジネステンプレート%3C/text%3E%3C/svg%3E",
      cta: "テンプレートを見る",
      reverse: false
    }
  ],
  news: [
    {
      id: "news1",
      title: "CMSサイトスタジオ v1.0 リリース",
      date: "2024.09.21",
      summary: "ヘッドレスCMSシステムの初回安定版をリリースしました。"
    },
    {
      id: "news2",
      title: "新テンプレート追加",
      date: "2024.09.20",
      summary: "ビジネス向けテンプレートを新たに追加いたしました。"
    },
    {
      id: "news3",
      title: "パフォーマンス向上アップデート",
      date: "2024.09.19",
      summary: "サイト表示速度を30%向上させるアップデートを実施。"
    }
  ],
  lastUpdated: new Date().toISOString()
};

// 拡張版コンテンツ管理クラス
export class ContentManagerEnhanced {
  private static STORAGE_KEY = 'cms-site-studio-content';

  // コンテンツを取得 (LocalStorage優先、Firestoreフォールバック)
  static async getContent(siteId?: string): Promise<SiteContent> {
    // ブラウザ環境でない場合はデフォルトコンテンツを返す
    if (typeof window === 'undefined') {
      return defaultContent;
    }

    try {
      // 1. LocalStorageから取得を試みる
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const localContent = JSON.parse(stored);

        // siteIdが指定されている場合は、Firestoreからも取得して比較
        if (siteId) {
          const firestoreContent = await this.getFromFirestore(siteId);
          if (firestoreContent && new Date(firestoreContent.lastUpdated) > new Date(localContent.lastUpdated)) {
            // Firestoreの方が新しい場合は、LocalStorageを更新
            this.saveToLocal(firestoreContent);
            return firestoreContent;
          }
        }

        return localContent;
      }

      // 2. LocalStorageにない場合、Firestoreから取得
      if (siteId) {
        const firestoreContent = await this.getFromFirestore(siteId);
        if (firestoreContent) {
          this.saveToLocal(firestoreContent);
          return firestoreContent;
        }
      }
    } catch (error) {
      console.error('Failed to load content:', error);
    }

    // 3. どちらからも取得できない場合はデフォルトを返す
    return defaultContent;
  }

  // コンテンツを保存 (LocalStorage + Firestore)
  static async saveContent(content: SiteContent, siteId?: string): Promise<void> {
    content.lastUpdated = new Date().toISOString();

    // LocalStorageに保存
    this.saveToLocal(content);

    // Firestoreに保存 (siteIdが指定されている場合)
    if (siteId) {
      await this.saveToFirestore(content, siteId);
    }

    // リアルタイム更新イベントを発火
    this.dispatchUpdateEvent(content);
  }

  // LocalStorageに保存
  private static saveToLocal(content: SiteContent): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(content));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }

  // Firestoreから取得
  private static async getFromFirestore(siteId: string): Promise<SiteContent | null> {
    try {
      const contentRef = firestore ? doc(firestore, 'content', siteId) : null;
      const contentSnap = contentRef ? await getDoc(contentRef) : null;

      if (contentSnap?.exists()) {
        return contentSnap.data() as SiteContent;
      }
    } catch (error) {
      console.error('Failed to load from Firestore:', error);
    }
    return null;
  }

  // Firestoreに保存
  private static async saveToFirestore(content: SiteContent, siteId: string): Promise<void> {
    try {
    if (!firestore) {
      console.log("Firestore not available");
      return;
    }
      const contentRef = doc(firestore, 'content', siteId);
      content.siteId = siteId;
      await setDoc(contentRef, content);
    } catch (error) {
      console.error('Failed to save to Firestore:', error);
      throw error;
    }
  }

  // リアルタイム更新イベントを発火
  private static dispatchUpdateEvent(content: SiteContent): void {
    if (typeof window === 'undefined') return;

    window.dispatchEvent(new CustomEvent('content-updated', {
      detail: content
    }));
  }

  // Firestoreリアルタイム監視を開始
  static subscribeToUpdates(siteId: string, callback: (content: SiteContent) => void) {
    if (typeof window === 'undefined') return () => {};
    if (!firestore) {
      return () => {};
    }

    const contentRef = doc(firestore, 'content', siteId);

    return onSnapshot(contentRef, (doc) => {
      if (doc.exists()) {
        const content = doc.data() as SiteContent;
        this.saveToLocal(content); // LocalStorageも同期
        callback(content);
      }
    });
  }

  // 初期データリセット
  static async resetToDefault(siteId?: string): Promise<void> {
    await this.saveContent(defaultContent, siteId);
  }

  // ヒーローコンテンツ更新
  static async updateHero(hero: HeroContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.hero = hero;
    await this.saveContent(current, siteId);
  }

  // 商品更新
  static async updateProduct(productId: string, product: ProductContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    const index = current.products.findIndex(p => p.id === productId);
    if (index >= 0) {
      current.products[index] = product;
      await this.saveContent(current, siteId);
    }
  }

  // 商品追加
  static async addProduct(product: ProductContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.products.push(product);
    await this.saveContent(current, siteId);
  }

  // 商品削除
  static async removeProduct(productId: string, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.products = current.products.filter(p => p.id !== productId);
    await this.saveContent(current, siteId);
  }

  // ニュース更新
  static async updateNews(news: NewsContent[], siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.news = news;
    await this.saveContent(current, siteId);
  }
}