
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-dataBlue/[0.02] to-dataGold/[0.05]">
        <CardContent className="p-6 text-center">
          <motion.div 
            className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-dataBlue to-blue-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {value}
          </motion.div>
          <motion.div 
            className="text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            {label}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
