import './globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Feedback Hub',
  description: 'Consumer feedback application',
}

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
