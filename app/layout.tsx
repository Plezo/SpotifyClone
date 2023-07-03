import './globals.css'
import { Inter, Oi } from 'next/font/google'
import Provider from '../components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music player',
  description: 'Spotify clone',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          {children}
        </body>
      </Provider>
    </html>
  )
}
