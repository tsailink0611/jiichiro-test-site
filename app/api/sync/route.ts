// 同期API - Vercel KV または GitHub Gist ベース
import { NextRequest, NextResponse } from 'next/server'
import { SiteContent } from '@/lib/content-manager-enhanced'

// 簡易ファイルベースストレージ（本番ではVercel KVやRedisを推奨）
const STORAGE_FILE = '/tmp/cms-data.json'

// メモリベース一時ストレージ（デモ用）
let memoryStorage: { content: SiteContent | null, lastUpdated: string | null } = {
  content: null,
  lastUpdated: null
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const action = url.searchParams.get('action')

  try {
    if (action === 'status') {
      return NextResponse.json({
        lastUpdated: memoryStorage.lastUpdated,
        needsSync: memoryStorage.content !== null
      })
    }

    if (action === 'get') {
      return NextResponse.json({
        content: memoryStorage.content,
        lastUpdated: memoryStorage.lastUpdated
      })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Sync GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { content } = body as { content: SiteContent }

    if (!content) {
      return NextResponse.json({ error: 'No content provided' }, { status: 400 })
    }

    // メモリに保存
    memoryStorage.content = content
    memoryStorage.lastUpdated = new Date().toISOString()

    console.log('Content synced to cloud:', {
      products: content.products?.length || 0,
      lastUpdated: memoryStorage.lastUpdated
    })

    return NextResponse.json({
      success: true,
      lastUpdated: memoryStorage.lastUpdated
    })
  } catch (error) {
    console.error('Sync POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}