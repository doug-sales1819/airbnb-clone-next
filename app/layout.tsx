import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb application clone',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

export default RootLayout;
