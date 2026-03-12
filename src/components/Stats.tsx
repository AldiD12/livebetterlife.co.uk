import { Star, MapPin, Clock, Shield, PoundSterling, Home, Award, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      number: "127",
      label: "Homes Transformed",
      sublabel: "Since 2010",
      icon: Home,
      color: "text-blue-600"
    },
    {
      number: "4.8★",
      label: "Average Rating",
      sublabel: "23 Google Reviews",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      number: "15",
      label: "Years Experience",
      sublabel: "in NW London",
      icon: Award,
      color: "text-green-600"
    },
    {
      number: "£75K",
      label: "Average Project",
      sublabel: "Investment",
      icon: PoundSterling,
      color: "text-purple-600"
    },
    {
      number: "89%",
      label: "On-Time Delivery",
      sublabel: "Rate",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      number: "£5M",
      label: "Public Liability",
      sublabel: "Insurance",
      icon: Shield,
      color: "text-red-600"
    },
    {
      number: "6",
      label: "Recent Projects",
      sublabel: "Completed 2023-2024",
      icon: Users,
      color: "text-teal-600"
    },
    {
      number: "NW6, NW9, HA3",
      label: "Primary Areas",
      sublabel: "We Serve",
      icon: MapPin,
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-white/30"></div>
            <span className="text-sm tracking-[0.3em] text-white/70 uppercase">Our Track Record</span>
            <div className="w-12 h-px bg-white/30"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-white font-serif mb-4 sm:text-4xl lg:tracking-[0.2em]">
            Proven Results in NW London
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Real numbers from real projects with real families
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1 sm:text-3xl lg:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-white/90 mb-1 sm:text-base">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60 sm:text-sm">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/80 leading-relaxed font-light">
              Every number tells a story of families who chose to transform their homes instead of moving. 
              <span className="text-white font-medium"> Your neighbors in West Hampstead, Brondesbury, and Kingsbury trust us with their biggest investment.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;