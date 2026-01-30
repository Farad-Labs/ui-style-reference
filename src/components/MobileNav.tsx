import { useState } from 'react';

interface MobileNavProps {
  logo: React.ReactNode;
  items: { label: string; href?: string; element?: React.ReactNode }[];
  className?: string;
  menuBg?: string;
  menuText?: string;
  hamburgerColor?: string;
  desktopItemClass?: string;
}

export const MobileNav = ({ 
  logo, 
  items, 
  className = '', 
  menuBg = 'bg-white',
  menuText = 'text-gray-800',
  hamburgerColor = 'currentColor',
  desktopItemClass = ''
}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative flex justify-between items-center ${className}`}>
      {logo}
      
      {/* Desktop nav */}
      <div className={`hidden sm:flex items-center gap-4 ${desktopItemClass}`}>
        {items.map((item, i) => (
          item.element || (
            <a key={i} href={item.href || '#'} className="hover:opacity-80 transition-opacity">
              {item.label}
            </a>
          )
        ))}
      </div>

      {/* Mobile hamburger */}
      <button 
        className="sm:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        style={{ color: hamburgerColor }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 min-w-48 rounded-lg ${menuBg} ${menuText} shadow-xl sm:hidden z-50`}>
          <div className="flex flex-col p-3 gap-1">
            {items.map((item, i) => (
              <a 
                key={i} 
                href={item.href || '#'} 
                className="px-4 py-2 rounded hover:bg-black/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
