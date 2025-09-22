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

  console.log('📡 Sync API GET - action:', action);

  try {
    if (action === 'status') {
      const status = {
        lastUpdated: memoryStorage.lastUpdated,
        needsSync: memoryStorage.content !== null,
        hasContent: memoryStorage.content !== null
      };
      console.log('📋 Sync API Status:', status);
      return NextResponse.json(status)
    }

    if (action === 'get') {
      const result = {
        content: memoryStorage.content,
        lastUpdated: memoryStorage.lastUpdated
      };
      console.log('📎 Sync API GET - returning content:', {
        hasContent: result.content !== null,
        productCount: result.content?.products?.length || 0
      });
      return NextResponse.json(result)
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('❌ Sync GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Sync API POST - receiving data');
    const body = await request.json()
    const { content } = body as { content: SiteContent }

    if (!content) {
      console.error('❌ Sync API POST - No content provided');
      return NextResponse.json({ error: 'No content provided' }, { status: 400 })
    }

    console.log('📎 Sync API POST - content received:', {
      products: content.products?.length || 0,
      productTitles: content.products?.map(p => p.title) || []
    });

    // メモリに保存
    memoryStorage.content = content
    memoryStorage.lastUpdated = new Date().toISOString()

    console.log('✅ Content synced to cloud:', {
      products: content.products?.length || 0,
      lastUpdated: memoryStorage.lastUpdated
    })

    return NextResponse.json({
      success: true,
      lastUpdated: memoryStorage.lastUpdated,
      productCount: content.products?.length || 0
    })
  } catch (error) {
    console.error('❌ Sync POST error:', error)
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