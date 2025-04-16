
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const ParallaxHero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax and opacity transforms based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  
  return (
    <motion.section 
      ref={targetRef}
      className="relative flex items-center justify-center overflow-hidden h-screen min-h-[600px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.7)), url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1920&auto=format&fit=crop')`,
          y: bgY,
          scale
        }}
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dataBlue/20 to-transparent mix-blend-overlay"></div>
      
      {/* Moving particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 100, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center"
        style={{ opacity, y: textY }}
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="inline-block mb-4 bg-dataGold/20 backdrop-blur-sm px-6 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white/90 font-medium">የአቃቂ ቃሊቲ ክፍለ ከተማ</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="block">ብልጽግና ፓርቲ</span>
            <motion.span 
              className="bg-gradient-to-r from-dataGold to-yellow-300 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% center", "100% center", "0% center"], 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              ሴቶች ክንፍ
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl xl:text-3xl text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            የሴቶች ኃይል የህዝብ ኃይል ነው፤ ብልጽግናን በእህቶች እጅ እንደግን!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-dataGold hover:bg-yellow-500 text-dataBlue shadow-lg transform transition duration-300 hover:scale-105 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/forms">
                አሁን ይቀላቀሉን
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 shadow-lg transform transition duration-300 hover:scale-105 px-8 py-6 text-lg rounded-full"
            >
              <a href="#about">
                ተጨማሪ ይወቁ
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-16 border-2 border-white/30 rounded-full flex justify-center items-start p-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.5
        }}
      >
        <motion.div 
          className="w-2 h-2 bg-white rounded-full"
          animate={{ y: [0, 14, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </motion.a>
    </motion.section>
  );
};
