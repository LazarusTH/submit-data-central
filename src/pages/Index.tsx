
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { FileText, Building, FileBarChart, LightbulbIcon, Target, Users, ArrowRight, BookOpen, Scale, Shield, Flag, Award, CheckCircle, GlobeLock } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    principles: false,
    vision: false,
    mission: false,
    cta: false,
    services: false
  });

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">የአዲስ አበባ ከተማ አስተዳደር</h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              የክፍለ ከተማ አስተዳደር ድረገጽ - የአዲስ አበባ ከተማ መስተዳደር ኦፊሴላዊ ድረገጽ
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
      <section id="about" className={`py-16 bg-white transition-all duration-700 ${isVisible.about ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
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
      
      {/* Merhoch (Principles) Section with Animation */}
      <section id="principles" className={`py-16 bg-gray-50 transition-all duration-700 ${isVisible.principles ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-dataBlue">ብልፅግና ፓርቲ መርሆች</h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
                  <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="text-dataBlue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ህዝባዊነት</h3>
                  <p className="text-gray-600">
                    ህዝብን በማገልገል እና በቅድሚያ በማስቀመጥ መርህ መሠረት እንሰራለን
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
                  <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FileBarChart className="text-dataBlue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ልማትና ፍትሃዊ ተጠቃሚነት</h3>
                  <p className="text-gray-600">
                    ሁሉንም አቀፍ ልማት እና ፍትሃዊ ተጠቃሚነት ማረጋገጥ
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
                  <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <CheckCircle className="text-dataBlue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ዴሞክራሲያዊነት</h3>
                  <p className="text-gray-600">
                    የሕዝብ አስተያየት እና ተሳትፎ የሚያስፈልግበት እና የሚበረታታበት
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
                  <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Target className="text-dataBlue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ተግባራዊ አውነታ</h3>
                  <p className="text-gray-600">
                    በተግባር የሚፈፀሙ እና የሚታዩ እውነታዎች ላይ መሥራት
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
                  <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Scale className="text-dataBlue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">የህግ የበላይነት</h3>
                  <p className="text-gray-600">
                    ሕግን የሚያከብር እና የሕግ የበላይነትን የሚያረጋግጥ ማህበረሰብ መፍጠር
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
                  <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Flag className="text-dataBlue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ሀገራዊ አንድነት ህብረ ብሔራዊነት</h3>
                  <p className="text-gray-600">
                    የሀገራችን ብዝሀነት ባህላዊ ሀብታችን ነው፤ በአንድነት የሚተዋወቅ ህብረ ብሔራዊነት
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Raey ena Alama (Vision and Mission) Section */}
      <section id="vision" className={`py-16 bg-white transition-all duration-700 ${isVisible.vision ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dataBlue mb-4">ብልፅግና ፓርቲ ራዕይ</h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="bg-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1">
                      <LightbulbIcon className="h-5 w-5 text-dataBlue" />
                    </div>
                    <p className="text-gray-700">በ2018 ከተስፋ ብርሀን ወደ የሚጨበጥ ብርሃን መሸጋገር</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1">
                      <Award className="h-5 w-5 text-dataBlue" />
                    </div>
                    <p className="text-gray-700">በ2023 የአፍሪካ የብልፅግና ተምሳሌት መሆን</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1">
                      <GlobeLock className="h-5 w-5 text-dataBlue" />
                    </div>
                    <p className="text-gray-700">በ2040 በአለም አቀፍ ደረጃ ስመጥር የሆነች የብልፅግና ተምሳሌት ሀገር የመሆን</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-dataGold mb-4">የብልፅግና ፓርቲ ጥቅል አላማ</h2>
              <div className="bg-dataGold/5 p-8 rounded-xl border border-dataGold/20 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">የበለፀገች ኢትዮጵያን</h3>
                <p className="text-xl text-gray-700 font-semibold">አውን ማድረግ !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Program CTA Section - Interactive */}
      <section id="cta" className={`py-16 bg-gradient-to-br from-dataBlue to-dataBlue-dark text-white transition-all duration-700 ${isVisible.cta ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">የብልፅግና ፓርቲ ፕሮግራም</h2>
              <p className="text-xl mb-8">
                አቅጣጫ
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-white/20">
                  <AccordionTrigger className="text-white text-lg hover:text-white/80">
                    የብልፅግና የዴሞክራሲ አቅጣጫ
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90">
                    ትብብርና ውድድር ላይ የተመሰረተ ለብዝሀነት አና በህብረ ብሔራዊነት የተለየ ቦታ የሚሰጥ የመግባባት ዴሞክሪሲ ነው፡፡
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-white/20">
                  <AccordionTrigger className="text-white text-lg hover:text-white/80">
                    የብልፅግና ፖለቲካ ስርአት
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90">
                    በህገ መንግስታችን ላይ የተመለከተውን አውነተኛ የመድብለ ፓርቲ አና ህብረ ብሄራዊ የፌደራል ስርዓት ነው፡፡
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-white/20">
                  <AccordionTrigger className="text-white text-lg hover:text-white/80">
                    የብልፅግና የኢኮኖሚ ስርአት
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90">
                    የዜጎች ፍትሃዊ ተጠቃሚነት ማአከል ያደረገ የመንግስት ጣልቃ ገብነት የሚፈቅድ አካታች ካፒታሊዝም ነው፡፡
                    የሚነደፉት ፖሊሲዎች ፕሮገራሞች አና ስትራቴጂዎች በዋናነት ሰው ተኮር ናቸው፡፡
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white text-lg hover:text-white/80">
                    የብልፅግና ውጭ ግንኙነት
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90">
                    በትብብር በፉክክር መሃል ሚዛን የሚጠብቅ ነው፡፡ ለዜጎች ክብር በቅድሚያ የሚሰጥ ነው፡፡ ብሄራዊ ጥቅም የሚያስጠብቅ ነው፡፡ ጎረቤት ሀገራትን የሚያስቀድም ነው፡፡
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-dataGold hover:bg-dataGold-dark text-black">
                <a href="#" className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>ሙሉ የፕሮግራም ሰነድ</span> 
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 bg-gray-50 transition-all duration-700 ${isVisible.services ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dataBlue">የአገልግሎት ዓይነቶች</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl hover:-translate-y-1">
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
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl hover:-translate-y-1">
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
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl hover:-translate-y-1">
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
