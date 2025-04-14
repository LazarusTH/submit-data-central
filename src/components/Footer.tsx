
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-gray-100">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-dataBlue" />
              <span className="font-bold text-lg text-dataBlue">
                ክፍለ<span className="text-dataGold">ከተማ</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              የክፍለ ከተማ አስተዳደር ለህዝብ አገልግሎት የሚሰጥ መስሪያቤት ነው።
            </p>
            <p className="text-sm text-gray-500">
              © {year} የክፍለ ከተማ አስተዳደር መስሪያቤት
            </p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-dataBlue mb-4">ፈጣን ማስፈንጠሪያዎች</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-dataBlue transition-colors">
                መነሻ ገጽ
              </Link>
              <Link to="/forms" className="hover:text-dataBlue transition-colors">
                ቅጾች
              </Link>
              <Link to="/admin" className="hover:text-dataBlue transition-colors">
                አስተዳዳሪ
              </Link>
              <a href="#services" className="hover:text-dataBlue transition-colors">
                አገልግሎቶች
              </a>
              <a href="#announcements" className="hover:text-dataBlue transition-colors">
                ማስታወቂያዎች
              </a>
            </nav>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-dataBlue mb-4">የመገኛ አድራሻ</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>ክፍለ ከተማ አስተዳደር መስሪያ ቤት፣ መድረክ አካባቢ፣ አዲስ አበባ</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+251 111 23 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@subcity.gov.et</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
