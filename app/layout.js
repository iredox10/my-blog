import './globals.css'
import { Inter,Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// ! learn how to set a font
// const roboto = Roboto(option({weights: [400, 700], subsets: ['latin']}))

export const metadata = {
  title: 'itruth',
  description: 'iredox blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
