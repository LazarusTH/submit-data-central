
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { FileText, Building, FileBarChart, ClipboardList, FileCheck } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dataBlue mb-4">የኢትዮጵያ መንግስት የክፍለ ከተማ ድረገፅ</h1>
            <p className="text-xl text-gray-600 mb-8">
              መረጃዎችን በቀላሉ ለማግኘት እና አገልግሎቶችን ለመጠቀም የተዘጋጀ የመንግስት ድረገፅ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-dataBlue hover:bg-dataBlue-dark">
                <Link to="/forms">አገልግሎቶች</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <a href="#announcements">ማስታወቂያዎች</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/admin">አስተዳዳሪ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dataBlue">የተገልጋዮች አገልግሎቶች</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">የመኖሪያ ቤት ማመልከቻ</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                የመኖሪያ ቤት ለማግኘት ማመልከቻ እዚህ ማስገባት ይችላሉ
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/forms">ማመልከቻ አስገባ</Link>
              </Button>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">የመታወቂያ ካርድ አገልግሎት</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                የመታወቂያ ካርድ ለማውጣት ወይም ለማደስ
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/forms">ማመልከቻ አስገባ</Link>
              </Button>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileCheck className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">የመሬት ባለቤትነት</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                የመሬት ባለቤትነት ማረጋገጫ ለማግኘት ማመልከቻ
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/forms">ማመልከቻ አስገባ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dataBlue">ማስታወቂያዎች</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex gap-3 mb-3">
                <span className="bg-dataBlue text-white text-xs px-3 py-1 rounded">ዜና</span>
                <span className="text-gray-500 text-sm">ሰኔ 15, 2017 ዓ.ም</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">የመሬት ካዳስትር ማሻሻያ ፕሮግራም ተጀምሯል</h3>
              <p className="text-gray-600">
                ከሰኔ 20 ጀምሮ የመሬት ካዳስትር ማሻሻያ ፕሮግራም በክፍለ ከተማችን እንደሚጀመር ለማሳወቅ እንወዳለን። ሁሉም የመሬት ባለቤቶች ሰነዶቻቸውን ይዘው እንዲቀርቡ እናሳውቃለን።
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex gap-3 mb-3">
                <span className="bg-dataGold text-white text-xs px-3 py-1 rounded">ማስታወቂያ</span>
                <span className="text-gray-500 text-sm">ሰኔ 10, 2017 ዓ.ም</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">የተሻሻለው የመታወቂያ ካርድ አሰራር ስራ ላይ ውሏል</h3>
              <p className="text-gray-600">
                አዲሱ የኢትዮጵያ መታወቂያ ካርድ አሰራር ስራ ላይ መዋሉን እናበስራለን። አገልግሎቱን ለማግኘት በሚቀጥለው ወር ከሰኞ እስከ አርብ በቢሮዎቻችን ላይ ያግኙን።
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dataBlue mb-6">ስለ እኛ</h2>
            <p className="text-lg text-gray-600 mb-6">
              የክፍለ ከተማችን አስተዳደር ለነዋሪዎች ለመቅረብ እና አገልግሎት ለመስጠት ይህንን ድረገፅ አዘጋጅቷል። 
              በርካታ አገልግሎቶችንም በመስመር ላይ እንዲሰጥ በማድረግ የዜጎችን ጊዜ እና ሀብት ለመቆጠብ እየሰራ ይገኛል።
            </p>
            <p className="text-lg text-gray-600">
              ማንኛውም ጥያቄ ካለዎት በ 0111-23-45-67 ይደውሉልን ወይም በኢሜል info@subcity.gov.et ያግኙን።
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
