import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像スライダー */}
        <HeroSlider interval={6000} />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="content-container relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-rock text-band-accent mb-4">
            CACCIA
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            ロックの魂を解き放つ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/music" className="btn-primary">
              Listen Now
            </Link>
            <Link href="/tour" className="btn-primary">
              Live Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* バンド紹介セクション */}
      <section className="bg-black bg-opacity-80 py-16">
        <div className="content-container">
          <h2 className="section-title">バンド紹介</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Cacciaは、情熱的なパフォーマンスと革新的なサウンドで知られる日本のロックバンドです。
                2020年に結成され、独自のスタイルと強烈なライブパフォーマンスで急速に人気を集めています。
              </p>
              <p className="text-lg">
                バンド名の「Caccia」はイタリア語で「狩り」を意味し、音楽を通じて新しい感動を追い求める姿勢を表しています。
                エネルギッシュなロックサウンドと繊細なメロディの融合が特徴です。
              </p>
            </div>
            <div className="relative h-80 w-full">
              {/* 実際の画像に置き換える必要があります */}
              <div className="absolute inset-0 bg-band-primary bg-opacity-20 flex items-center justify-center">
                <p className="text-xl font-bold">バンド写真</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新情報セクション */}
      <section className="py-16">
        <div className="content-container">
          <h2 className="section-title">最新情報</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-band-primary pl-4">
              <h3 className="text-xl font-bold">新曲「if」リリース</h3>
              <p className="text-sm text-gray-300">2025年5月17日</p>
              <p className="mt-2">
                待望の新曲「if」が全ストリーミングプラットフォームで配信開始！
              </p>
            </div>
            <div className="border-l-4 border-band-primary pl-4">
              <h3 className="text-xl font-bold">Tech Rock Festivalの出演が決定</h3>
              <p className="text-sm text-gray-300">2025年5月17日</p>
              <p className="mt-2">
                11月開催予定のTech Rock FestivalにCacciaの出演が決定！
                参加はConnpassページの公開をお待ちください。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/news" className="btn-primary">
              ニュース一覧へ
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black py-8">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-rock text-band-primary">CACCIA</h2>
              <p className="text-sm">© 2025 Caccia. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-band-accent hover:text-band-primary">
                Twitter
              </a>
              <a href="#" className="text-band-accent hover:text-band-primary">
                Instagram
              </a>
              <a href="#" className="text-band-accent hover:text-band-primary">
                YouTube
              </a>
              <a href="#" className="text-band-accent hover:text-band-primary">
                Spotify
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
