import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessTimeline from './components/ProcessTimeline';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import Estimate from './pages/Estimate';
import ContactPage from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import UnderConstruction from './pages/UnderConstruction';


// Other Pages

const App = () => {
  console.log('App component rendering');
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="w-full">
              <Hero />
              <WhyChooseUs />
              <Services />
              <ProcessTimeline />
              <Portfolio />
              <Testimonials />
              <Contact />
            </main>
          } />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/estimate" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;