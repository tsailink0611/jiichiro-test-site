// クラウド同期システム - GitHub Gist ベース
import type { SiteContent } from './content-manager-enhanced'

export class CloudSync {
  private static GIST_ID = 'jiichiro-cms-data'
  private static SYNC_ENDPOINT = '/api/sync'

  // クラウドからデータを取得
  static async getFromCloud(): Promise<SiteContent | null> {
    try {
      console.log('🌐 Cloud Sync: データ取得開始');
      const response = await fetch(this.SYNC_ENDPOINT + '?action=get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      console.log('📡 Cloud Sync GET レスポンス:', response.status);

      if (response.ok) {
        const data = await response.json()
        console.log('✅ Cloud Sync: データ取得成功 -', data.content ? '商品数: ' + data.content.products?.length : 'データなし');
        return data.content
      } else {
        console.log('⚠️ Cloud Sync: データ未存在または取得失敗');
      }
    } catch (error) {
      console.error('❌ Cloud sync get error:', error)
    }
    return null
  }

  // クラウドにデータを保存
  static async saveToCloud(content: SiteContent): Promise<boolean> {
    try {
      console.log('🚀 Cloud Sync: データ保存開始 - 商品数:', content.products.length);
      const response = await fetch(this.SYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content })
      })

      console.log('📡 Cloud Sync POST レスポンス:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Cloud Sync: 保存成功 -', result);
        return true;
      } else {
        console.error('❌ Cloud Sync: 保存失敗 - HTTP', response.status);
        return false;
      }
    } catch (error) {
      console.error('❌ Cloud sync save error:', error)
      return false
    }
  }

  // 同期状態をチェック
  static async checkSyncStatus(): Promise<{ lastUpdated: string | null, needsSync: boolean }> {
    try {
      const response = await fetch(this.SYNC_ENDPOINT + '?action=status', {
        method: 'GET'
      })

      if (response.ok) {
        return await response.json()
      }
    } catch (error) {
      console.error('Sync status check error:', error)
    }

    return { lastUpdated: null, needsSync: false }
  }
}