'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// バンドの画像URL配列
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop",
    alt: "ロックバンドのライブパフォーマンス"
  },
  {
    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
    alt: "コンサート会場の様子"
  },
  {
    url: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=2076&auto=format&fit=crop",
    alt: "ギタリストのパフォーマンス"
  },
  {
    url: "https://images.unsplash.com/photo-1574226516831-e1dff420e562?q=80&w=2069&auto=format&fit=crop",
    alt: "ドラマーのパフォーマンス"
  }
]

interface HeroSliderProps {
  interval?: number; // スライド切り替え間隔（ミリ秒）
}

export default function HeroSlider({ interval = 5000 }: HeroSliderProps): React.ReactElement {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 一定間隔で画像を切り替える
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      // トランジション開始から少し遅れて次の画像に切り替え
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        
        // トランジション終了
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="absolute inset-0 z-0">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
