
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { FileText, Building, FileBarChart, LightbulbIcon, Target, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section with Addis Ababa background */}
      <section className="bg-cover bg-center py-24" 
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1580674684089-3c8d0e6b3574?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover"
        }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">የአዲስ አበባ ከተማ አስተዳደር</h1>
            <p className="text-xl text-gray-100 mb-8">
              የክፍለ ከተማ አስተዳደር ድረገጽ - የአዲስ አበባ ከተማ መስተዳደር ኦፊሴላዊ ድረገጽ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-dataBlue hover:bg-dataBlue-dark">
                <Link to="/forms">አገልግሎቶች</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="#about">ስለ እኛ</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-dataGold text-dataGold hover:bg-dataGold/10">
                <Link to="/admin">አስተዳዳሪ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dataBlue mb-6">ስለ እኛ</h2>
            <p className="text-lg text-gray-700 mb-6">
              የአዲስ አበባ ክፍለ ከተማ አስተዳደር የአካባቢው ነዋሪዎች ፍላጎቶችን ለማሟላት እና ጥራት ያለው አገልግሎት ለመስጠት በመሥራት ላይ ይገኛል።
              ከተማችን ለሁሉም ነዋሪዎች ምቹ፣ ደህንነቱ የተጠበቀ እና ዘላቂ እንዲሆን ለማድረግ ቁርጠኞች ነን።
            </p>
            <p className="text-lg text-gray-700">
              በአካባቢያችን ውስጥ የሚኖሩ ሰዎች ሁሉ ተገቢውን አገልግሎት እንዲያገኙ፣ ፍትሃዊ እና ግልፅ የሆነ አሠራር እንዲኖር በመንቀሳቀስ ላይ እንገኛለን።
            </p>
          </div>
        </div>
      </section>
      
      {/* Merhoch (Principles/Services) Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dataBlue">መርሆዎቻችን</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Principle 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ነዋሪዎችን ማገልገል</h3>
              <p className="text-gray-600 flex-grow">
                የአካባቢውን ነዋሪዎች ፍላጎት በቅድሚያ በማስቀመጥ ለማገልገል እንተጋለን
              </p>
            </div>
            
            {/* Principle 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ግልፅነት</h3>
              <p className="text-gray-600 flex-grow">
                ሁሉም አሰራሮቻችን በግልፅነት እና በተጠያቂነት መርህ የሚካሄዱ ናቸው
              </p>
            </div>
            
            {/* Principle 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ማህበረሰብ ግንባታ</h3>
              <p className="text-gray-600 flex-grow">
                ጠንካራ እና ተባባሪ የሆነ ማህበረሰብ ለመገንባት እንሰራለን
              </p>
            </div>
            
            {/* Principle 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileBarChart className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ዘላቂ ልማት</h3>
              <p className="text-gray-600 flex-grow">
                ለወደፊት ትውልድ የሚጠቅም ዘላቂ ልማት ለማምጣት እንተጋለን
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raey ena Alama (Vision and Mission) Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-dataBlue/5 p-8 rounded-xl border border-dataBlue/20">
              <div className="flex items-center gap-3 mb-4">
                <LightbulbIcon className="h-8 w-8 text-dataBlue" />
                <h2 className="text-2xl font-bold text-dataBlue">ራዕያችን</h2>
              </div>
              <p className="text-lg text-gray-700">
                ለነዋሪዎቿ ምቹ፣ ስራና አገልግሎት ያበዛች፣ ቀጣይ ዘላቂ ዕድገት ያለባት፣ ኩሩ ታሪክ ያላት፣ 
                ውብ ባህልና ጥበብ ያዳበረች፣ ታላቅ አፍሪካዊ መዲና እንድትሆን የተተኮረ ራዕይ ያለን ክፍለ ከተማ አስተዳደር ነን።
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-dataGold/5 p-8 rounded-xl border border-dataGold/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-dataGold" />
                <h2 className="text-2xl font-bold text-dataGold">ተልዕኮአችን</h2>
              </div>
              <p className="text-lg text-gray-700">
                የመልካም አስተዳደር ስርዓትን በመዘርጋት ለነዋሪዎች ተደራሽ፣ ቀልጣፋ፣ ኢኮኖሚያዊ፣ ውጤታማና 
                ሕዝብን ያረካ አገልግሎት በመስጠት እንዲሁም ነዋሪዎች በአስተዳደሩ ውሳኔዎች ላይ ተሳታፊ እንዲሆኑ በማድረግ 
                ከነዋሪው ጋር በመሆን ለውጥ ማምጣት።
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beltsegena Party CTA Section */}
      <section className="py-16 bg-gradient-to-br from-dataBlue to-dataBlue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">የብልፅግና ፓርቲ</h2>
            <p className="text-xl mb-8">
              ሁሉን አቀፍ እና ቀጣይነት ያለው ብልፅግና ለማረጋገጥ ቁርጠኛ የሆነ ፓርቲ። 
              በኢትዮጵያ ዴሞክራሲ ግንባታ እና የሀገሪቱን ዕድገት የማፋጠን አብይ ሚና አለው።
            </p>
            <Button asChild size="lg" className="bg-dataGold hover:bg-dataGold-dark text-black">
              <a href="#" className="flex items-center gap-2">
                <span>ተጨማሪ መረጃ ለማግኘት</span> 
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dataBlue">የአገልግሎት ዓይነቶች</h2>
          
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
                <FileText className="text-dataBlue h-6 w-6" />
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dataBlue mb-6">አድራሻ</h2>
            <p className="text-lg text-gray-700 mb-6">
              ማንኛውም ጥያቄ ካለዎት በእነዚህ አድራሻዎች ይገኙን።
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="font-bold mb-2">ስልክ</p>
                <p>+251 111 23 45 67</p>
              </div>
              <div className="text-center">
                <p className="font-bold mb-2">ኢሜል</p>
                <p>info@subcity.gov.et</p>
              </div>
              <div className="text-center">
                <p className="font-bold mb-2">አድራሻ</p>
                <p>አዲስ አበባ፣ ክፍለ ከተማ መስሪያ ቤት</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
