// Firebase設定とクライアント初期化 (デモモード対応)
import { initializeApp, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

// Firebase設定オブジェクト
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'demo-project.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo-project',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'demo-project.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:123456789:web:abcdef'
}

// Firebase App初期化 (デモモード対応)
let app: FirebaseApp | null = null
let auth: Auth | null = null
let firestore: Firestore | null = null
let storage: FirebaseStorage | null = null
let isFirebaseEnabled = false

// デモモード判定
const isDemoMode = !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
                   process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'demo-api-key'

if (!isDemoMode) {
  try {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    firestore = getFirestore(app)
    storage = getStorage(app)
    isFirebaseEnabled = true
  } catch (error) {
    console.error('Firebase initialization error:', error)
    console.log('デモモードで動作を続行します。')
  }
} else {
  console.log('デモモードで動作中。Firebase機能は無効です。')
}

export { app, auth, firestore, storage, isFirebaseEnabled, isDemoMode }

// 型定義
export interface User {
  id: string
  email: string
  siteId: string
  createdAt: Date
  lastLogin: Date
}

export interface Site {
  id: string
  domain: string
  template: 'modern' | 'minimal' | 'business'
  ownerId: string
  createdAt: Date
  lastUpdated: Date
}