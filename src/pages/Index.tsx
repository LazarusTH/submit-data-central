
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar,
  ChevronRight,
  ArrowRight,
  Check,
  Star,
  Users,
  Award,
  Building2,
  GraduationCap,
  Target,
  Sparkles
} from 'lucide-react';
import { ParallaxHero } from '@/components/landing/ParallaxHero';
import { FeatureCard } from '@/components/landing/FeatureCard';
import { AnimatedSection } from '@/components/landing/AnimatedSection';
import { StatCard } from '@/components/landing/StatCard';
import { TestimonialCard } from '@/components/landing/TestimonialCard';
import { EventCard } from '@/components/landing/EventCard';

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax and opacity transforms based on scroll position
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const bgY = useTransform(scrollYProgress, [0, 0.6], [0, 150]);
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <ParallaxHero />

      {/* Mission Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-6xl mx-auto">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-dataBlue to-blue-700">
                የሴቶች ክንፍ ተልዕኮ
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                የአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ ሴቶች ክንፍ ቅርንጫፍ ጽ/ቤት ዋነኛ ተልዕኮ የሴቶችን ፖለቲካዊ፣ ማህበራዊ እና ኢኮኖሚያዊ ተሳትፎ ማብቃት ነው።
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "የሴቶችን መብቶች ማረጋገጥ",
                  "የሴቶች አመራር ሚና ማጎልበት",
                  "የሴቶችን ተሳትፎ ማሳደግ",
                  "የሴቶችን የኑሮ ደረጃ ማሻሻል"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 bg-dataGold/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-dataGold" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button asChild variant="outline" className="group border-dataBlue text-dataBlue hover:bg-dataBlue hover:text-white">
                <Link to="/forms" className="flex items-center">
                  ተጨማሪ ይመልከቱ
                  <ChevronRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-dataBlue/20 to-dataGold/20 blur-xl opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1920&auto=format&fit=crop" 
                  alt="ስብሰባ" 
                  className="relative rounded-xl shadow-lg w-full h-80 object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-3 shadow-xl">
                  <div className="flex items-center gap-3 px-2">
                    <span className="text-4xl font-bold text-dataBlue">500+</span>
                    <span className="text-sm text-gray-600 leading-tight">ተመዝጋቢዎች<br />በ2016</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dataBlue">ስኬቶች እና አገልግሎቶች</h2>
            <div className="h-1 w-20 bg-dataGold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              የአቃቂ ቃሊቲ ክፍለ ከተማ ብልጽግና ፓርቲ ሴቶች ክንፍ በሴቶች ህይወት ላይ አዎንታዊ ተጽዕኖ ለማምጣት በርካታ ፕሮግራሞችን በመተግበር ላይ ይገኛል።
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Target />}
              title="የሴቶች የስራ ፈጠራ"
              description="ለሴቶች ስራ ፈጠራ ፕሮጀክቶች የገንዘብ እና የማማከር ድጋፍ"
              index={0}
            />
            <FeatureCard 
              icon={<GraduationCap />}
              title="የትምህርት ድጋፍ"
              description="ለሴቶች የትምህርት ዕድሎች እና የስልጠና ፕሮግራሞች"
              index={1}
            />
            <FeatureCard 
              icon={<Users />}
              title="ማህበረሰብ ግንባታ"
              description="የሴቶች ጠንካራ ማህበረሰብ እና አውታረመረብ መፍጠር"
              index={2}
            />
            <FeatureCard 
              icon={<Award />}
              title="ብልጽግና ማሳደግ"
              description="የሴቶችን ኢኮኖሚያዊ ብልጽግና እና መብት ማስጠበቅ"
              index={3}
            />
            <FeatureCard 
              icon={<Building2 />}
              title="አመራር ማብቃት"
              description="ሴቶች ለተለያዩ የአመራር ሚናዎች እንዲበቁ ማድረግ"
              index={4}
            />
            <FeatureCard 
              icon={<Star />}
              title="ልዩ ፕሮግራሞች"
              description="ለተለያዩ የሴቶች ቡድኖች የተለያዩ የድጋፍ ስልቶች"
              index={5}
            />
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-dataGold text-dataBlue hover:bg-yellow-500 group">
              <Link to="/forms" className="flex items-center">
                ተጨማሪ አገልግሎቶች
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dataBlue">የተመዘገቡ ውጤቶች</h2>
            <div className="h-1 w-20 bg-dataGold mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <StatCard value="500+" label="አባላት" index={0} />
            <StatCard value="150+" label="የስራ ዕድሎች" index={1} />
            <StatCard value="1.2M" label="ድጋፍ በብር" index={2} />
            <StatCard value="35+" label="ፕሮግራሞች" index={3} />
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dataBlue">የአባላት ግብረመልስ</h2>
            <div className="h-1 w-20 bg-dataGold mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard 
              quote="የሴቶች ክንፍ ፕሮግራም በእኔ ህይወት ላይ ትልቅ ለውጥ አምጥቷል። አሁን የራሴን ንግድ መጀመር ችያለሁ።" 
              name="አለምነሽ ታደሰ"
              role="ባለቤት፣ አለም ጌስት ሃውስ"
              image="https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=1400&auto=format&fit=crop"
              index={0}
            />
            <TestimonialCard 
              quote="የአመራር ስልጠና ፕሮግራሙ ለእኔ አዲስ በር ከፍቷል። አሁን በማህበረሰቤ ውስጥ ውሳኔ ሰጪ ሆኛለሁ።" 
              name="ፍሬህይወት ወንድም"
              role="ኮሚቴ አባል፣ ወረዳ 9"
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1400&auto=format&fit=crop"
              index={1}
            />
            <TestimonialCard 
              quote="የተሰጠኝ የገንዘብ ድጋፍ የራሴን ትንሽ የምግብ ቤት እንድከፍት አስችሎኛል። አሁን ቤተሰቤን መርዳት እችላለሁ።" 
              name="ትዕግስት ከበደ"
              role="ባለቤት፣ ትዕግስት ምግብ ቤት"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop"
              index={2}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dataBlue">ቀጣይ ፕሮግራሞች</h2>
            <div className="h-1 w-20 bg-dataGold mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <EventCard 
              title="የንግድ ስልጠና"
              date="መጋቢት 15, 2017"
              location="ወረዳ 8 ማህበረሰብ ማዕከል"
              image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
              index={0}
            />
            <EventCard 
              title="የሴቶች መብት ግንዛቤ"
              date="መጋቢት 23, 2017"
              location="ቃሊቲ ስብሰባ አዳራሽ"
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              index={1}
            />
            <EventCard 
              title="የፖለቲካ ተሳትፎ ውይይት"
              date="ሚያዚያ 5, 2017"
              location="አቃቂ ማዘጋጃ ቤት"
              image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1400&auto=format&fit=crop"
              index={2}
            />
          </div>

          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button asChild className="bg-dataBlue hover:bg-blue-800 group">
              <Link to="/forms" className="flex items-center">
                ሁሉም ፕሮግራሞችን ይመልከቱ
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-dataBlue to-dataBlue-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='white'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px" 
          }}></div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dataGold/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-dataGold/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-block mb-4"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-10 w-10 text-dataGold" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">አብረን እንስራ!</h2>
              <p className="text-xl mb-8 text-white/90">
                በአቃቂ ቃሊቲ ክፍለ ከተማ ሴቶች ክንፍ ይቀላቀሉን። አብረን በሚቀጥሉት ዓመታት መልካም ስራዎችን እንሥራ!
              </p>
              <Button asChild size="lg" className="bg-dataGold text-dataBlue hover:bg-yellow-400 shadow-lg transform transition-transform hover:scale-105 group">
                <Link to="/forms" className="flex items-center">
                  አሁን ይመዝገቡ
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
};

export default Index;
