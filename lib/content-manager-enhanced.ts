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

export interface TraditionContent {
  heroTitle: string;
  heroSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  sectionDetail: string;
  finalTitle: string;
  finalMessage: string;
}

export interface CompanyContent {
  heroTitle: string;
  heroSubtitle: string;
  companyName: string;
  establishedYear: string;
  employees: string;
  capital: string;
  headquarters: string;
  business: string;
  philosophy: string;
  representativeMessage: string;
  representativeName: string;
  timeline: Array<{
    year: string;
    event: string;
  }>;
}

export interface ContactContent {
  heroTitle: string;
  heroSubtitle: string;
  phone: string;
  phoneHours: string;
  email: string;
  address: string;
  nearestStation: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface AccessContent {
  heroTitle: string;
  heroSubtitle: string;
  address: string;
  phone: string;
  hours: string;
  holidays: string;
  access: Array<{
    method: string;
    description: string;
  }>;
  facilities: Array<{
    name: string;
    description: string;
  }>;
}

export interface SiteContent {
  hero: HeroContent;
  products: ProductContent[];
  news: NewsContent[];
  tradition: TraditionContent;
  company: CompanyContent;
  contact: ContactContent;
  access: AccessContent;
  lastUpdated: string;
  siteId?: string;
}

// 梵天庵用のデフォルトコンテンツ
export const defaultContent: SiteContent = {
  hero: {
    title: "梵天庵 - デモコンテンツ",
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
      title: "梵天庵 v1.0 リリース",
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
  tradition: {
    heroTitle: "伝統",
    heroSubtitle: "受け継がれる技と心\n時を超えて愛される味わい",
    sectionTitle: "四季を纏う\n職人の技",
    sectionDescription: "創業以来変わらぬ製法で、一つひとつ丁寧に仕上げる和菓子。季節の移ろいを表現し、素材の持つ本来の美味しさを大切にしています。",
    sectionDetail: "熟練の職人が長年培った技術と感性により、伝統の味を現代に受け継いでいます。",
    finalTitle: "伝統は、未来への贈り物",
    finalMessage: "私たちは、先人から受け継いだ技術と心を大切にしながら、次世代に向けて新しい価値を創造し続けます。伝統とは、過去の遺産ではなく、未来への約束なのです。"
  },
  company: {
    heroTitle: "会社概要",
    heroSubtitle: "私たちの歩みと理念\n確かな実績と未来への想い",
    companyName: "株式会社梵天庵",
    establishedYear: "1985年",
    employees: "120名",
    capital: "5,000万円",
    headquarters: "東京都千代田区千代田1-1-1",
    business: "和菓子の製造・販売、伝統工芸品の企画・開発",
    philosophy: "「伝統を守り、革新を創る」私たちは長年培った技術を大切にしながら、時代のニーズに応える新しい価値を提供し続けます。",
    representativeMessage: "創業以来、変わらぬ想いを胸に歩み続けてまいりました。これからも皆様に愛される企業として、伝統と革新の調和を追求してまいります。",
    representativeName: "代表取締役 田中 太郎",
    timeline: [
      { year: "1985", event: "東京都千代田区にて創業" },
      { year: "1992", event: "本社工場を拡張、生産体制を強化" },
      { year: "2001", event: "伝統工芸品事業に参入" },
      { year: "2010", event: "オンライン販売を開始" },
      { year: "2020", event: "サステナブル経営に本格転換" }
    ]
  },
  contact: {
    heroTitle: "お問い合わせ",
    heroSubtitle: "ご質問・ご相談はお気軽にお寄せください\n専門スタッフが丁寧にお答えいたします",
    phone: "03-1234-5678",
    phoneHours: "平日 9:00-18:00",
    email: "info@cms-site-studio.com",
    address: "〒100-0001\n東京都千代田区千代田1-1-1\nCMSビル 5F",
    nearestStation: "JR東京駅 徒歩5分\n地下鉄大手町駅 徒歩3分",
    faqs: [
      {
        question: "サポート体制について教えてください",
        answer: "専属カスタマーサクセスチームが導入から運用まで全面的にサポートいたします。"
      },
      {
        question: "料金プランについて",
        answer: "用途に応じた柔軟な料金プランをご用意しています。詳細はお問い合わせください。"
      },
      {
        question: "無料トライアルはありますか？",
        answer: "14日間の無料トライアルをご利用いただけます。クレジットカード登録は不要です。"
      }
    ]
  },
  access: {
    heroTitle: "アクセス",
    heroSubtitle: "ご来社をお待ちしております\n詳しいアクセス方法をご案内いたします",
    address: "〒100-0001\n東京都千代田区千代田1-1-1\nCMSビル 5F",
    phone: "03-1234-5678",
    hours: "平日 9:00-18:00",
    holidays: "土日祝日、年末年始",
    access: [
      {
        method: "JR東京駅から",
        description: "丸の内中央口より徒歩5分。皇居方面へ向かい、内堀通り沿いのCMSビルです。"
      },
      {
        method: "地下鉄大手町駅から",
        description: "C1出口より徒歩3分。地上に出て右折、最初の角を左折してすぐです。"
      },
      {
        method: "お車でお越しの場合",
        description: "首都高速都心環状線「竹橋」出口より約3分。近隣にコインパーキングがございます。"
      }
    ],
    facilities: [
      {
        name: "1階エントランス",
        description: "受付にてお名前をお伝えください。エレベーターで5階までお上がりください。"
      },
      {
        name: "周辺施設",
        description: "皇居東御苑まで徒歩2分。お打ち合わせ前後の散策にもおすすめです。"
      },
      {
        name: "駐車場",
        description: "ビル専用駐車場はございません。近隣のコインパーキングをご利用ください。"
      }
    ]
  },
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

  // 伝統ページ更新
  static async updateTradition(tradition: TraditionContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.tradition = tradition;
    await this.saveContent(current, siteId);
  }

  // 会社概要ページ更新
  static async updateCompany(company: CompanyContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.company = company;
    await this.saveContent(current, siteId);
  }

  // お問い合わせページ更新
  static async updateContact(contact: ContactContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.contact = contact;
    await this.saveContent(current, siteId);
  }

  // アクセスページ更新
  static async updateAccess(access: AccessContent, siteId?: string): Promise<void> {
    const current = await this.getContent(siteId);
    current.access = access;
    await this.saveContent(current, siteId);
  }
}