
import { Link } from 'react-router-dom';
import { Database } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col sm:flex-row py-8 items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Database className="h-5 w-5 text-dataBlue" />
          <span className="text-sm text-muted-foreground">
            © {year} <span className="font-medium">DataCentral</span>
          </span>
        </div>
        
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/admin" className="hover:text-foreground transition-colors">
            Admin
          </Link>
        </nav>
      </div>
    </footer>
  );
}
