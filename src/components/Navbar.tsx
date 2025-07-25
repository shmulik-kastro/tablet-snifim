'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/company-policies'     , label: 'נהלי חברה' },
  { href: '/cash-policies'        , label: 'נהלי קופות' },
  { href: '/sales-reports'        , label: 'דוחות מכירות' },
  { href: '/new-employee-contract', label: 'חוזה לעובד חדש' },
  { href: '/barcode-scan'         , label: 'סריקת ברקוד' },
  { href: '/customer-service'     , label: 'שירות לקוחות' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="font-bold text-xl">מערכת החברה</div>
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded hover:bg-gray-100 transition ${
                pathname === item.href ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
        >
          <span className="w-6 h-1 bg-gray-700 mb-1 rounded"></span>
          <span className="w-6 h-1 bg-gray-700 mb-1 rounded"></span>
          <span className="w-6 h-1 bg-gray-700 rounded"></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 hover:bg-gray-100 transition ${
                  pathname === item.href ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-700'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
