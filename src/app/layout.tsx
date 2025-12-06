import type { Metadata } from 'next'
import './globals.css'
import { LoginProvider } from './LoginContext'
import ClientLayout from './ClientLayout'   // ← נוסיף את זה

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

          {/* מכאן ואילך – הלוגיקה של Navbar / main עוברת ל-ClientLayout */}
          <ClientLayout>
            {children}
          </ClientLayout>
        </LoginProvider>
      </body>
    </html>
  )
}
