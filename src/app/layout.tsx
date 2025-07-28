import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { LoginProvider } from './LoginContext'

export const metadata: Metadata = {
  title: 'מערכת החברה',
  description: 'פורטל נהלים ודוחות ארגוני',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-gray-50 min-h-screen">
        <LoginProvider>
          {/* פס לוגואים עליון */}
          <header className="w-full flex flex-row-reverse items-center justify-between px-10 py-4 bg-white border-b-2 border-gray-200">
            <img
              src="/renuar.png"
              alt="RENUAR Logo"
              className="h-13 object-contain"
              style={{ maxWidth: 250 }}
            />
            <img
              src="/twentyfourseven.png"
              alt="TWENTYFOURSEVEN Logo"
              className="h-35 object-contain"
              style={{ maxWidth: 250 }}
            />
          </header>

          {/* סרגל ניווט */}
          <nav className="w-full bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
              <Navbar />
            </div>
          </nav>

          {/* תוכן הדף */}
          <main className="max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>
        </LoginProvider>
      </body>
    </html>
  )
}
