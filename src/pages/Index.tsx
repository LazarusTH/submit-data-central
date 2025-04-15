
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  ChevronRight,
  ArrowRight
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

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

const pulseAnimation = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2, 
      ease: "easeInOut", 
      repeat: Infinity 
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

const Index = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Transform values based on scroll
  const flagRotate = useTransform(scrollYProgress, [0, 0.2], [0, 10]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Handle scroll for parallax effects
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

  return (
    <PageLayout>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ 
          opacity: heroOpacity,
          scale: heroScale
        }}
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.8)), url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        
        {/* Flag animation */}
        <motion.div 
          className="absolute right-0 bottom-0 w-32 h-64 opacity-40"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg')",
            backgroundSize: "cover",
            rotate: flagRotate
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              የአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ<br />
              <motion.span 
                className="text-dataGold bg-gradient-to-r from-dataGold to-yellow-300 bg-clip-text text-transparent"
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
              >
                ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              የሴቶች ኃይል የህዝብ ኃይል ነው፤ ብልጽግናን በእህቶች እጅ እንደግን!
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-dataGold hover:bg-yellow-500 text-dataBlue transform transition duration-300 hover:scale-105 shadow-lg"
              >
                <a href="#about" className="group flex items-center">
                  ተጨማሪ ይመልከቱ 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 transform transition duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/forms" className="group flex items-center">
                  አገልግሎቶች
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative wave element */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1440,37.3L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </motion.div>
      </motion.section>

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
              <div className="h-1 w-24 bg-gradient-to-r from-dataGold to-yellow-400 mx-auto mb-6 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                variants={fadeInLeft}
                initial="hidden"
                animate={isVisible.about ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  የአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት በክፍለ ከተማው ውስጥ የሚኖሩ ሴቶች ፖለቲካዊ፣ ማህበራዊ እና ኢኮኖሚያዊ ተሳትፎ እንዲጎለብት ያለመ ነው።
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  በአቃቂ ቃሊቲ ክፍለ ከተማ ውስጥ ያሉ ሴቶችን በማደራጀት፣ በማብቃት እና በማገዝ ረገድ የተለያዩ ፕሮግራሞችን በመተግበር እየሰራ ይገኛል። ይህ የሴቶች ክንፍ የብልጽግና ፓርቲ አካል ሆኖ የሴቶችን መብት ለማስከበር እና ተሳትፎ ለማሳደግ ጠንክሮ ይሰራል።
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  እያንዳንዷ ሴት የብልጽግና ፓርቲ አጋርና ደጋፊ በመሆን በአቃቂ ቃሊቲ ክፍለ ከተማ ያለውን ሁለንተናዊ እድገት እውን ለማድረግ እንድትሳተፍ ጥሪ እናደርጋለን።
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInRight}
                initial="hidden"
                animate={isVisible.about ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1920&auto=format&fit=crop" 
                    alt="ሴቶች ስብሰባ" 
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 mt-8"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1920&auto=format&fit=crop" 
                    alt="ስልጠና ፕሮግራም" 
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className={`py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white transition-all duration-700 ${isVisible.principles ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.principles ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">መሠረታዊ እሴቶቻችን</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-dataGold to-yellow-400 mx-auto mb-8 rounded-full"></div>
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
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-dataGold/30 to-yellow-300/30 w-20 h-20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Users className="h-10 w-10 text-dataGold" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">አንድነት</h3>
              <p className="text-gray-600">
                ሁሉንም ማህበረሰብ አካቶ በአንድነት መስራት
              </p>
            </motion.div>
            
            {/* Principle 2 */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-dataGold/30 to-yellow-300/30 w-20 h-20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Handshake className="h-10 w-10 text-dataGold" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">ሰላም</h3>
              <p className="text-gray-600">
                ሰላማዊ እና ተባብሮ የመስራት ባህልን ማዳበር
              </p>
            </motion.div>
            
            {/* Principle 3 */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-dataGold/30 to-yellow-300/30 w-20 h-20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Star className="h-10 w-10 text-dataGold" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">ስኬት</h3>
              <p className="text-gray-600">
                የጋራ እድገትና ብልፅግና ማረጋገጥ
              </p>
            </motion.div>
            
            {/* Principle 4 */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-dataGold/30 to-yellow-300/30 w-20 h-20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <Heart className="h-10 w-10 text-dataGold" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-dataBlue">የሴቶች ውብ ተሳትፎ</h3>
              <p className="text-gray-600">
                የሴቶችን ተሳትፎና አመራር ማጎልበት
              </p>
            </motion.div>
            
            {/* Principle 5 */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-dataGold/30 to-yellow-300/30 w-20 h-20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <ShieldCheck className="h-10 w-10 text-dataGold" />
              </motion.div>
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
            <div className="h-1 w-24 bg-gradient-to-r from-dataGold to-yellow-400 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.goals ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              className="bg-gradient-to-br from-dataBlue/5 to-dataGold/5 p-8 rounded-2xl border border-gray-100 shadow-lg"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-dataBlue mb-3">የበለፀገች ኢትዮጵያን</h3>
                <p className="text-2xl font-semibold bg-gradient-to-r from-dataGold to-yellow-500 bg-clip-text text-transparent">አውን ማድረግ !</p>
              </motion.div>
              
              <div className="space-y-6 mt-10">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-br from-dataBlue/20 to-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1 shadow-inner">
                    <LightbulbIcon className="h-5 w-5 text-dataBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dataBlue mb-2">የሴቶች ተሳትፎ ማሳደግ</h4>
                    <p className="text-gray-700">በፖለቲካ፣ ኢኮኖሚና ማህበራዊ ዘርፎች ሴቶች ሙሉ ተሳትፎ እንዲኖራቸው ማስቻል</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4" 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-br from-dataBlue/20 to-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1 shadow-inner">
                    <CheckCircle className="h-5 w-5 text-dataBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dataBlue mb-2">የሴቶች ብቃት ማሳደግ</h4>
                    <p className="text-gray-700">በትምህርት፣ በአመራር፣ በስልጠና እና በተለያዩ ክህሎቶች ሴቶችን ማብቃት</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-br from-dataBlue/20 to-dataBlue/10 rounded-full min-w-10 h-10 flex items-center justify-center mt-1 shadow-inner">
                    <Award className="h-5 w-5 text-dataBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dataBlue mb-2">የሴቶች መብት ማስከበር</h4>
                    <p className="text-gray-700">በሁሉም ዘርፎች የሴቶች መብት መከበሩን ማረጋገጥና ፍትሃዊ ተጠቃሚነታቸውን ማስጠበቅ</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className={`py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${isVisible.programs ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.programs ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dataBlue mb-4">የብልጽግና ፓርቲ ፕሮግራሞች</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-dataGold to-yellow-400 mx-auto mb-6 rounded-full"></div>
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
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <Card className="transition-all duration-500 h-full border-t-4 border-t-dataGold overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-dataBlue flex items-center gap-2">
                    <motion.div 
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                    >
                      <Calendar className="h-5 w-5 text-dataGold" />
                    </motion.div>
                    የሴቶች የስራ ፈጠራ ፕሮግራም
                  </CardTitle>
                  <CardDescription>ነሐሴ 2016 - ጥቅምት 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ለሴት ነጋዴዎች የቢዝነስ ስልጠና እና የገንዘብ ድጋፍ ፕሮግራም። ይህ ፕሮግራም በክፍለ ከተማው ውስጥ የሚኖሩ ሴቶች የራሳቸውን ንግድ እንዲጀምሩ ያግዛል።</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-dataBlue border-dataBlue hover:bg-dataBlue/5 group"
                  >
                    ተጨማሪ መረጃ 
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            {/* Program 2 */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <Card className="transition-all duration-500 h-full border-t-4 border-t-dataGold overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-dataBlue flex items-center gap-2">
                    <motion.div 
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                    >
                      <Calendar className="h-5 w-5 text-dataGold" />
                    </motion.div>
                    የሴቶች የህግ ግንዛቤ ፕሮግራም
                  </CardTitle>
                  <CardDescription>መስከረም 2017 - ታህሳስ 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ሴቶች ስለመብታቸው እና የህግ ጉዳዮች እንዲያውቁ የሚረዳ ፕሮግራም። የመብቶቻቸውን በሚመለከት ስልጠናዎች እና የግንዛቤ ማስጨበጫ ዝግጅቶችን ያካተተ።</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-dataBlue border-dataBlue hover:bg-dataBlue/5 group"
                  >
                    ተጨማሪ መረጃ 
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            {/* Program 3 */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <Card className="transition-all duration-500 h-full border-t-4 border-t-dataGold overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-dataBlue flex items-center gap-2">
                    <motion.div 
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                    >
                      <Calendar className="h-5 w-5 text-dataGold" />
                    </motion.div>
                    የሴቶች የአመራር ክህሎት ስልጠና
                  </CardTitle>
                  <CardDescription>ጥር 2017 - ሰኔ 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ሴቶች በፖለቲካ፣ በተለያዩ ማህበራዊ እና ኢኮኖሚያዊ መስኮች ውስጥ የአመራር ሚና እንዲኖራቸው የሚያስችል የአመራር ክህሎት ስልጠና።</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-dataBlue border-dataBlue hover:bg-dataBlue/5 group"
                  >
                    ተጨማሪ መረጃ 
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              asChild 
              className="bg-dataBlue hover:bg-blue-800 transform transition duration-300 hover:scale-105 shadow-lg group"
            >
              <Link to="/forms" className="flex items-center">
                ሁሉም ፕሮግራሞችን እዩ
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
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
            <div className="h-1 w-24 bg-gradient-to-r from-dataGold to-yellow-400 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={isVisible.achievements ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="mb-12 bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
              whileHover={{ scale: 1.01 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-dataBlue mb-4 bg-gradient-to-r from-dataBlue to-blue-700 bg-clip-text text-transparent">
                    የሴቶች የስራ ፈጠራ መርሀ ግብር
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    በ2015 በአቃቂ ቃሊቲ ክፍለ ከተማ ውስጥ 500 ሴቶች የራሳቸውን ንግድ እንዲመሰርቱና የስራ ፈጠራ ክህሎታቸውን እንዲያሳድጉ አድርጓል።
                  </p>
                  <ul className="ml-6 space-y-3">
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-dataGold/20 p-1 rounded-full">
                        <CheckCircle className="text-dataGold h-5 w-5 flex-shrink-0" />
                      </div>
                      <span className="font-medium">500 ሴቶች ተጠቃሚ ሆነዋል</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-dataGold/20 p-1 rounded-full">
                        <CheckCircle className="text-dataGold h-5 w-5 flex-shrink-0" />
                      </div>
                      <span className="font-medium">150 አዳዲስ ንግዶች ተመስርተዋል</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-dataGold/20 p-1 rounded-full">
                        <CheckCircle className="text-dataGold h-5 w-5 flex-shrink-0" />
                      </div>
                      <span className="font-medium">300+ የስራ እድሎች ተፈጥረዋል</span>
                    </motion.li>
                  </ul>
                </div>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1920&auto=format&fit=crop" 
                    alt="የሴቶች የስራ ፈጠራ ፕሮግራም" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={isVisible.achievements ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-dataBlue mb-6 text-center bg-gradient-to-r from-dataBlue to-blue-700 bg-clip-text text-transparent">
                የአቃቂ ቃሊቲ ሴቶች የተሳትፎ ፎቶ ማህደር
              </h3>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="max-w-5xl mx-auto"
                >
                  <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        className="p-1 h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full transition-all transform">
                          <motion.img 
                            src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1920&auto=format&fit=crop" 
                            alt="ሴቶች ስብሰባ" 
                            className="w-full h-64 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-dataBlue">የሴቶች አመራር ስብሰባ</h4>
                            <p className="text-gray-600 text-sm">ሰኔ 2015</p>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        className="p-1 h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full transition-all transform">
                          <motion.img 
                            src="https://images.unsplash.com/photo-1603966164273-fb8ef3cb9a76?q=80&w=1920&auto=format&fit=crop" 
                            alt="ስልጠና ፕሮግራም" 
                            className="w-full h-64 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-dataBlue">የንግድ ስልጠና</h4>
                            <p className="text-gray-600 text-sm">ጥር 2016</p>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        className="p-1 h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full transition-all transform">
                          <motion.img 
                            src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=1920&auto=format&fit=crop" 
                            alt="የማህበረሰብ ፕሮጀክት" 
                            className="w-full h-64 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-dataBlue">የማህበረሰብ አገልግሎት</h4>
                            <p className="text-gray-600 text-sm">መጋቢት 2016</p>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        className="p-1 h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full transition-all transform">
                          <motion.img 
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop" 
                            alt="ውይይቶች" 
                            className="w-full h-64 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-dataBlue">መድረክ እና ውይይት</h4>
                            <p className="text-gray-600 text-sm">ሰኔ 2016</p>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-8 gap-4">
                    <CarouselPrevious className="relative static transition-transform hover:scale-110" />
                    <CarouselNext className="relative static transition-transform hover:scale-110" />
                  </div>
                </Carousel>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-dataBlue to-dataBlue-dark text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              ይቀላቀሉን!
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              በአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት ይሳተፉ። አብረን እንስራ!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-dataGold to-yellow-500 hover:from-yellow-500 hover:to-dataGold text-dataBlue transform transition duration-300 hover:scale-105 shadow-lg group"
              >
                <Link to="/forms" className="flex items-center">
                  ለመመዝገብ ይጠቀሙ
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </motion.section>

      {/* CSS for animations */}
      <style>
        {`
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

export default Index;
