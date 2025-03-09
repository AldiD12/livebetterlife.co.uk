import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Estimate from './Estimate';

const EstimatePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Estimate />
      </div>
      <Footer />
    </div>
  );
};

export default EstimatePage; 