import React, { useState, useEffect } from 'react';
import { Clock, Calendar, X } from 'lucide-react';

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    // Set deadline to end of current month
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Clock className="w-5 h-5" />
          <div className="text-sm font-medium">
            <span className="hidden sm:inline">LIMITED TIME: </span>
            Free design consultation + 10% off projects booked this month
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="font-bold">{timeLeft.days}</span>
              <span>days</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">{timeLeft.hours}</span>
              <span>hrs</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">{timeLeft.minutes}</span>
              <span>min</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;