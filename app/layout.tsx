import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino — официальный сайт и зеркало',
  description: 'Понятный гид по Lucky Bear Casino: официальный сайт, зеркало, мобильный вход и ответственная игра.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="6650c5417e71498f" />
        <title>Lucky Bear Casino — официальный сайт и зеркало</title>
        <meta name="description" content="Понятный гид по Lucky Bear Casino: официальный сайт, зеркало, мобильный вход и ответственная игра." />
        <meta name="keywords" content="luckybear casino, luckybear casino зеркало, luckybear casino официальный сайт, лаки бир казино, лакибир казино" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lucky Bear Casino — официальный сайт и зеркало" />
        <meta property="og:description" content="Короткий и понятный гид по Lucky Bear Casino для поиска официального входа и мобильной версии." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
