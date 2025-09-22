// クラウド同期システム - GitHub Gist ベース
import type { SiteContent } from './content-manager-enhanced'

export class CloudSync {
  private static GIST_ID = 'jiichiro-cms-data'
  private static SYNC_ENDPOINT = '/api/sync'

  // クラウドからデータを取得
  static async getFromCloud(): Promise<SiteContent | null> {
    try {
      const response = await fetch(this.SYNC_ENDPOINT + '?action=get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (response.ok) {
        const data = await response.json()
        return data.content
      }
    } catch (error) {
      console.error('Cloud sync get error:', error)
    }
    return null
  }

  // クラウドにデータを保存
  static async saveToCloud(content: SiteContent): Promise<boolean> {
    try {
      const response = await fetch(this.SYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content })
      })

      return response.ok
    } catch (error) {
      console.error('Cloud sync save error:', error)
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