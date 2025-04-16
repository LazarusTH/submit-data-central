
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg border-none bg-white overflow-hidden group">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="relative mb-5">
            <div className="absolute inset-0 bg-dataGold/10 rounded-full scale-100 group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-dataBlue to-blue-700 p-3 rounded-full text-white w-14 h-14 flex items-center justify-center shadow-md group-hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-300">
              {icon}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-dataBlue group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
