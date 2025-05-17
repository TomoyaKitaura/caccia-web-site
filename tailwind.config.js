/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'band-primary': '#e63946', // バンドのプライマリカラー（例：赤系）
        'band-secondary': '#1d3557', // バンドのセカンダリカラー（例：ダークブルー）
        'band-accent': '#f1faee', // アクセントカラー（例：オフホワイト）
      },
      fontFamily: {
        'rock': ['Rock Salt', 'cursive'], // ロックバンドらしいフォント
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
