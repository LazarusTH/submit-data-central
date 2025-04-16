
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  image,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-transparent group overflow-hidden">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-1 mb-5">
            <div className="text-dataGold mb-3">
              <Quote className="h-6 w-6" />
            </div>
            <p className="text-gray-700 italic relative">
              "{quote}"
            </p>
          </div>
          
          <div className="flex items-center pt-4 border-t border-gray-100">
            <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div>
              <h4 className="font-medium text-dataBlue">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
