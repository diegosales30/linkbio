import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GOAT',
  description: 'Minhas redes sociais e contatos',
  icons: {
    icon: ['/favicon.ico?v=4',],
    apple: ['/apple-touch-icon.png?v=4',],
    android: ['/android-chrome-192x192.png',],
    shortcut: ['/apple-touch-icon.png',],
  },
  manifest: '/site.webmanifest',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="keywords" content="Ruyter, bio, redes sociais, contatos" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
