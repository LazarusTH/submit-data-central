
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl md:text-2xl">
          <Building2 className="h-6 w-6 text-dataBlue" />
          <span className="text-dataBlue">ክፍለ<span className="text-dataGold">ከተማ</span></span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-dataBlue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link to="/" className="flex items-center gap-1">
              <span>መነሻ ገጽ</span>
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/forms" className="flex items-center gap-1">
              <span>ቅጾች</span>
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/womens-wing" className="flex items-center gap-1">
              <span>ሴቶች ክንፍ</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-dataBlue text-dataBlue hover:bg-dataBlue/5">
            <Link to="/admin" className="flex items-center gap-1">
              <span>አስተዳዳሪ</span>
            </Link>
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col space-y-1 p-3 bg-white">
            <Button asChild variant="ghost" className="justify-start">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                መነሻ ገጽ
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start">
              <Link to="/forms" onClick={() => setIsMenuOpen(false)}>
                ቅጾች
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start">
              <Link to="/womens-wing" onClick={() => setIsMenuOpen(false)}>
                ሴቶች ክንፍ
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start">
              <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                አስተዳዳሪ
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
