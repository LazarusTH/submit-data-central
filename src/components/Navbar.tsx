
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Database, FileText, UserCheck, FileBarChart } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2 font-bold text-2xl">
          <Database className="h-6 w-6 text-dataBlue" />
          <span className="text-dataBlue">Data<span className="text-dataGold">Central</span></span>
        </Link>
        <nav className="ml-auto flex gap-2">
          <Button asChild variant="ghost">
            <Link to="/admin" className="flex items-center gap-1">
              <span>Admin</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
