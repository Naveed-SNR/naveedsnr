import './globals.css'
import { Inter } from 'next/font/google'


//components
import Navbar from './components/Navbar'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naveed SNR',
  description: 'Naveed SNR's Porfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
