'use client'

import { useState, useRef, DragEvent, ChangeEvent } from 'react'

interface ImageUploadProps {
  value: string
  onChange: (imageData: string) => void
  className?: string
}

export default function ImageUpload({ value, onChange, className = '' }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        // 最大サイズを800x800に制限
        const maxSize = 800
        let { width, height } = img

        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width
            width = maxSize
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height
            height = maxSize
          }
        }

        canvas.width = width
        canvas.height = height

        // 画像を描画
        ctx?.drawImage(img, 0, 0, width, height)

        // 圧縮（品質0.7）
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7)
        resolve(compressedDataUrl)
      }

      img.onerror = () => reject(new Error('画像の処理に失敗しました'))
      img.src = URL.createObjectURL(file)
    })
  }

  const handleFile = async (file: File) => {
    // ファイル形式チェック
    if (!file.type.startsWith('image/')) {
      alert('画像ファイルを選択してください')
      return
    }

    // ファイルサイズチェック（20MB制限に拡大、圧縮するため）
    if (file.size > 20 * 1024 * 1024) {
      alert('ファイルサイズは20MB以下にしてください')
      return
    }

    setIsLoading(true)

    try {
      // 画像を圧縮
      const compressedDataUrl = await compressImage(file)

      // 圧縮後のサイズをチェック（Base64の場合、実際のサイズの約1.33倍）
      const sizeInBytes = (compressedDataUrl.length * 3) / 4
      const sizeInMB = sizeInBytes / (1024 * 1024)

      console.log(`画像圧縮完了: ${(file.size / (1024 * 1024)).toFixed(2)}MB → ${sizeInMB.toFixed(2)}MB`)

      if (sizeInMB > 2) {
        alert('画像が大きすぎます。より小さな画像を選択してください。')
        setIsLoading(false)
        return
      }

      onChange(compressedDataUrl)
      setIsLoading(false)
    } catch (error) {
      console.error('画像圧縮エラー:', error)
      alert('画像の処理に失敗しました')
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* ドラッグ&ドロップエリア */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`
          relative border-2 border-dashed rounded-lg p-8 cursor-pointer transition-all duration-300
          ${isDragging
            ? 'border-teal-500 bg-teal-50'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }
          ${isLoading ? 'pointer-events-none opacity-50' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="text-gray-600">画像を処理中...</p>
          </div>
        ) : value ? (
          <div className="text-center">
            <div className="mb-4">
              <img
                src={value}
                alt="アップロード済み画像"
                className="max-w-full max-h-48 mx-auto rounded-lg shadow-md"
              />
            </div>
            <p className="text-sm text-gray-600 mb-3">画像をアップロード済み</p>
            <div className="flex justify-center space-x-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleClick()
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                画像を変更
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemove()
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                画像を削除
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-lg text-gray-600 mb-2">画像をドラッグ&ドロップ</p>
            <p className="text-sm text-gray-500 mb-4">または、クリックしてファイルを選択</p>
            <div className="text-xs text-gray-400">
              対応形式: JPG, PNG, GIF, WebP<br />
              最大サイズ: 20MB（自動圧縮あり）<br />
              <span className="text-green-600">✨ 800x800に最適化され、容量を削減します</span>
            </div>
          </div>
        )}
      </div>

      {/* URLで直接指定オプション */}
      <div className="border-t pt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          または、画像URLを直接入力
        </label>
        <div className="flex space-x-3">
          <input
            type="text"
            value={value && !value.startsWith('data:') ? value : ''}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
          {value && !value.startsWith('data:') && (
            <button
              type="button"
              onClick={handleRemove}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              クリア
            </button>
          )}
        </div>
        {value && !value.startsWith('data:') && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">URL画像プレビュー:</p>
            <div className="max-w-xs">
              <img
                src={value}
                alt="URL画像プレビュー"
                className="w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuOCpOODoeODvOOCuOOBj+OBl+OBvuOBmzwvdGV4dD48L3N2Zz4='
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}