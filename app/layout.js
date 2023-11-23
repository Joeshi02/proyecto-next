import Header from '@/components/Header'
import './globals.css'
import {Roboto} from '@next/font/google'
import Footer from '@/components/Footer'
import { CartProvider } from '@/components/context/CartContext'

export const metadata = {
  title: 'LIMIT IMPORT',
  description: 'Limit Import tienda de respuesto e importacion de vehiculos',
}

const robototitle = Roboto({
  subsets:['latin'],
  weight:'700'
})

export default function RootLayout({ children }) {
  return (
    <html className={robototitle.className} lang="en">
      <body className='h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 letrasLimit' >
        <CartProvider>
          <Header/>
        {children}
        <Footer/>
        </CartProvider> 
      </body>
    </html>
  )
}
