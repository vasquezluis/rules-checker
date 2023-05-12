import './globals.css'
import { Inter } from 'next/font/google'

// -> COMPONENTS
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rules Checker',
  description: 'Check documents using AI'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>

        <Navigation />

        {children}

      </body>
    </html>
  )
}
