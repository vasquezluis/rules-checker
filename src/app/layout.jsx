import './globals.css'
import { font } from './font'

// -> COMPONENTS
import Navigation from '../components/_partials/Navigation'
import Footer from '@/components/_partials/Footer'

export const metadata = {
  title: 'Rules Checker',
  description: ' | Check documents using AI'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <div className='flex justify-center h-full w-full bg-white'>
          <div className='bg-green-800 h-screen w-[1500px]'>
            <Navigation />

            {children}

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
