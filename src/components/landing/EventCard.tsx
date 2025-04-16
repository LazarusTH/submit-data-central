
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date, 
  location, 
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
      <Card className="h-full transition-all duration-300 hover:shadow-xl border-none overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="space-y-3 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-dataGold" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-dataGold" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue hover:text-white">
            <Link to="/forms">
              ለመመዝገብ
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
