
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Heart, 
  Award, 
  Users, 
  ShieldCheck, 
  Handshake, 
  Star, 
  LightbulbIcon, 
  CheckCircle,
  Calendar,
  ChevronRight
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Define a type for the isVisible state
interface VisibilityState {
  about?: boolean;
  principles?: boolean;
  goals?: boolean;
  programs?: boolean;
  achievements?: boolean;
  [key: string]: boolean | undefined;
}

const WomensWing = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax and confetti effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Generate confetti particles for hero section
  const renderConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 8 + 5;
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 5}s`;
      const opacity = Math.random() * 0.7 + 0.3;
      
      confetti.push(
        <div 
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left: left,
            top: `-${size}px`,
            backgroundColor: i % 3 === 0 ? '#f6ad55' : i % 3 === 1 ? '#1a365d' : '#ffffff',
            opacity: opacity,
            animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
            animationDelay: animationDelay,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
      );
    }
    return confetti;
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.8)), url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        {/* Confetti/Sparkles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {renderConfetti()}
        </div>
        
        {/* Flag animation */}
        <div 
          className="absolute right-0 bottom-0 w-32 h-64 opacity-40"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg')",
            backgroundSize: "cover",
            animation: "wave 4s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              የአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ<br />
              <span className="text-dataGold">ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት</span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              የሴቶች ኃይል የህዝብ ኃይል ነው፤ ብልጽግናን በእህቶች እጅ እንደግን!
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button asChild size="lg" className="bg-dataGold text-dataBlue hover:bg-dataGold-light">
                <a href="#about">ተጨማሪ ይመልከቱ</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/forms">አገልግሎቶች</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative wave element */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1440,37.3L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-16 md:py-24 bg-white transition-all duration-700 ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={isVisible.about ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">ስለ እኛ</h2>
              <div className="h-1 w-24 bg-dataGold mx-auto mb-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate={isVisible.about ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg text-gray-700 mb-6">
                  የአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት በክፍለ ከተማው ውስጥ የሚኖሩ ሴቶች ፖለቲካዊ፣ ማህበራዊ እና ኢኮኖሚያዊ ተሳትፎ እንዲጎለብት ያለመ ነው።
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  በአቃቂ ቃሊቲ ክፍለ ከተማ ውስጥ ያሉ ሴቶችን በማደራጀት፣ በማብቃት እና በማገዝ ረገድ የተለያዩ ፕሮግራሞችን በመተግበር እየሰራ ይገኛል። ይህ የሴቶች ክንፍ የብልጽግና ፓርቲ አካል ሆኖ የሴቶችን መብት ለማስከበር እና ተሳትፎ ለማሳደግ ጠንክሮ ይሰራል።
                </p>
                <p className="text-lg text-gray-700">
                  እያንዳንዷ ሴት የብልጽግና ፓርቲ አጋርና ደጋፊ በመሆን በአቃቂ ቃሊቲ ክፍለ ከተማ ያለውን ሁለንተናዊ እድገት እውን ለማድረግ እንድትሳተፍ ጥሪ እናደርጋለን።
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate={isVisible.about ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1920&auto=format&fit=crop" 
                    alt="ሴቶች ስብሰባ" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1920&auto=format&fit=crop" 
                    alt="ስልጠና ፕሮግራም" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className={`py-16 md:py-24 bg-gray-50 transition-all duration-700 ${isVisible.principles ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.principles ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">መሠረታዊ እሴቶቻችን</h2>
            <div className="h-1 w-24 bg-dataGold mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.principles ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {/* Principle 1 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-dataGold/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-dataGold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">አንድነት</h3>
              <p className="text-gray-600">
                ሁሉንም ማህበረሰብ አካቶ በአንድነት መስራት
              </p>
            </motion.div>
            
            {/* Principle 2 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-dataGold/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Handshake className="h-10 w-10 text-dataGold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">ሰላም</h3>
              <p className="text-gray-600">
                ሰላማዊ እና ተባብሮ የመስራት ባህልን ማዳበር
              </p>
            </motion.div>
            
            {/* Principle 3 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-dataGold/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-10 w-10 text-dataGold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">ስኬት</h3>
              <p className="text-gray-600">
                የጋራ እድገትና ብልፅግና ማረጋገጥ
              </p>
            </motion.div>
            
            {/* Principle 4 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-dataGold/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-10 w-10 text-dataGold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">የሴቶች ውብ ተሳትፎ</h3>
              <p className="text-gray-600">
                የሴቶችን ተሳትፎና አመራር ማጎልበት
              </p>
            </motion.div>
            
            {/* Principle 5 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-dataGold/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-10 w-10 text-dataGold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">ትእዛዝነት</h3>
              <p className="text-gray-600">
                የህግ የበላይነት ማስከበርና ተጠያቂነትን ማረጋገጥ
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className={`py-16 md:py-24 bg-white transition-all duration-700 ${isVisible.goals ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.goals ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">የብልጽግና ፓርቲ ጥቅል አላማ</h2>
            <div className="h-1 w-24 bg-dataGold mx-auto mb-6"></div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.goals ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-dataBlue/5 to-dataGold/5 p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-dataBlue mb-3">የበለፀገች ኢትዮጵያን</h3>
                <p className="text-2xl font-semibold text-dataGold">አውን ማድረግ !</p>
              </div>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="bg-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1">
                    <LightbulbIcon className="h-5 w-5 text-dataBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dataBlue mb-2">የሴቶች ተሳትፎ ማሳደግ</h4>
                    <p className="text-gray-700">በፖለቲካ፣ ኢኮኖሚና ማህበራዊ ዘርፎች ሴቶች ሙሉ ተሳትፎ እንዲኖራቸው ማስቻል</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-dataBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dataBlue mb-2">የሴቶች ብቃት ማሳደግ</h4>
                    <p className="text-gray-700">በትምህርት፣ በአመራር፣ በስልጠና እና በተለያዩ ክህሎቶች ሴቶችን ማብቃት</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1">
                    <Award className="h-5 w-5 text-dataBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dataBlue mb-2">የሴቶች መብት ማስከበር</h4>
                    <p className="text-gray-700">በሁሉም ዘርፎች የሴቶች መብት መከበሩን ማረጋገጥና ፍትሃዊ ተጠቃሚነታቸውን ማስጠበቅ</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className={`py-16 md:py-24 bg-gray-50 transition-all duration-700 ${isVisible.programs ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.programs ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">የብልጽግና ፓርቲ ፕሮግራሞች</h2>
            <div className="h-1 w-24 bg-dataGold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              በአቃቂ ቃሊቲ ክፍለ ከተማ ውስጥ ለሴቶች የተዘጋጁ የብልጽግና ፓርቲ ፕሮግራሞች
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.programs ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Program 1 */}
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-dataGold hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-dataBlue flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-dataGold" /> የሴቶች የስራ ፈጠራ ፕሮግራም
                  </CardTitle>
                  <CardDescription>ነሐሴ 2016 - ጥቅምት 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ለሴት ነጋዴዎች የቢዝነስ ስልጠና እና የገንዘብ ድጋፍ ፕሮግራም። ይህ ፕሮግራም በክፍለ ከተማው ውስጥ የሚኖሩ ሴቶች የራሳቸውን ንግድ እንዲጀምሩ ያግዛል።</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-dataBlue border-dataBlue hover:bg-dataBlue/5">
                    ተጨማሪ መረጃ <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            {/* Program 2 */}
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-dataGold hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-dataBlue flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-dataGold" /> የሴቶች የህግ ግንዛቤ ፕሮግራም
                  </CardTitle>
                  <CardDescription>መስከረም 2017 - ታህሳስ 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ሴቶች ስለመብታቸው እና የህግ ጉዳዮች እንዲያውቁ የሚረዳ ፕሮግራም። የመብቶቻቸውን በሚመለከት ስልጠናዎች እና የግንዛቤ ማስጨበጫ ዝግጅቶችን ያካተተ።</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-dataBlue border-dataBlue hover:bg-dataBlue/5">
                    ተጨማሪ መረጃ <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            {/* Program 3 */}
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-dataGold hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-dataBlue flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-dataGold" /> የሴቶች የአመራር ክህሎት ስልጠና
                  </CardTitle>
                  <CardDescription>ጥር 2017 - ሰኔ 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ሴቶች በፖለቲካ፣ በተለያዩ ማህበራዊ እና ኢኮኖሚያዊ መስኮች ውስጥ የአመራር ሚና እንዲኖራቸው የሚያስችል የአመራር ክህሎት ስልጠና።</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-dataBlue border-dataBlue hover:bg-dataBlue/5">
                    ተጨማሪ መረጃ <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-dataBlue hover:bg-dataBlue-light">
              <Link to="/forms">ሁሉም ፕሮግራሞችን እዩ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-16 md:py-24 bg-white transition-all duration-700 ${isVisible.achievements ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.achievements ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">እስካሁን ያለፉ ስራዎቻችን</h2>
            <div className="h-1 w-24 bg-dataGold mx-auto mb-6"></div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={isVisible.achievements ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-dataBlue mb-4">የሴቶች የስራ ፈጠራ መርሀ ግብር</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    በ2015 በአቃቂ ቃሊቲ ክፍለ ከተማ ውስጥ 500 ሴቶች የራሳቸውን ንግድ እንዲመሰርቱና የስራ ፈጠራ ክህሎታቸውን እንዲያሳድጉ አድርጓል።
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-dataGold h-5 w-5 flex-shrink-0" />
                      <span>500 ሴቶች ተጠቃሚ ሆነዋል</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-dataGold h-5 w-5 flex-shrink-0" />
                      <span>150 አዳዲስ ንግዶች ተመስርተዋል</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-dataGold h-5 w-5 flex-shrink-0" />
                      <span>300+ የስራ እድሎች ተፈጥረዋል</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1920&auto=format&fit=crop" 
                    alt="የሴቶች የስራ ፈጠራ ፕሮግራም" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={isVisible.achievements ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-dataBlue mb-6 text-center">የአቃቂ ቃሊቲ ሴቶች የተሳትፎ ፎቶ ማህደር</h3>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="max-w-5xl mx-auto"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full hover:shadow-xl transition-all transform hover:scale-105">
                        <img 
                          src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1920&auto=format&fit=crop" 
                          alt="ሴቶች ስብሰባ" 
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-dataBlue">የሴቶች አመራር ስብሰባ</h4>
                          <p className="text-gray-600 text-sm">ሰኔ 2015</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full hover:shadow-xl transition-all transform hover:scale-105">
                        <img 
                          src="https://images.unsplash.com/photo-1603966164273-fb8ef3cb9a76?q=80&w=1920&auto=format&fit=crop" 
                          alt="ስልጠና ፕሮግራም" 
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-dataBlue">የንግድ ስልጠና</h4>
                          <p className="text-gray-600 text-sm">ጥር 2016</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full hover:shadow-xl transition-all transform hover:scale-105">
                        <img 
                          src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=1920&auto=format&fit=crop" 
                          alt="የማህበረሰብ ፕሮጀክት" 
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-dataBlue">የማህበረሰብ አገልግሎት</h4>
                          <p className="text-gray-600 text-sm">መጋቢት 2016</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full hover:shadow-xl transition-all transform hover:scale-105">
                        <img 
                          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop" 
                          alt="ውይይቶች" 
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-dataBlue">መድረክ እና ውይይት</h4>
                          <p className="text-gray-600 text-sm">ሰኔ 2016</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative static" />
                  <CarouselNext className="relative static" />
                </div>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-dataBlue to-dataBlue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ይቀላቀሉን!</h2>
            <p className="text-xl mb-8">
              በአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት ይሳተፉ። አብረን እንስራ!
            </p>
            <Button asChild size="lg" className="bg-dataGold text-dataBlue hover:bg-dataGold-light">
              <Link to="/forms">ለመመዝገብ ይጠቀሙ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CSS for confetti animation */}
      <style>
        {`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        `}
      </style>
    </PageLayout>
  );
};

export default WomensWing;

