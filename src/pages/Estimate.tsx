import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecificationLevel.css';

const Estimate = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const levels = [
    {
      id: 1,
      name: 'Entry Level',
      icon: '🏠',
      description: 'Budget-friendly materials and finishes',
      examples: 'Basic fixtures and standard materials'
    },
    {
      id: 2,
      name: 'Mid-Range',
      icon: '🏘️',
      description: 'Quality materials with better durability',
      examples: 'Premium fixtures and enhanced finishes'
    },
    {
      id: 3,
      name: 'Premium',
      icon: '🏰',
      description: 'Luxury materials and finishes',
      examples: 'Designer brands and high-end specifications'
    }
  ];

  const handleSelection = (levelId: number) => {
    setSelectedLevel(levelId);
  };

  const handleNext = () => {
    if (selectedLevel) {
      navigate('/project-scope', { state: { specLevel: selectedLevel } });
    }
  };

  return (
    <div className="spec-container">
      <h1>Select Your Project Level</h1>
      <div className="spec-cards">
        {levels.map(level => (
          <div 
            key={level.id} 
            className={`spec-card ${selectedLevel === level.id ? 'selected' : ''}`}
            onClick={() => handleSelection(level.id)}
          >
            <div className="icon">{level.icon}</div>
            <h2>{level.name}</h2>
            <p>{level.description}</p>
            <small>{level.examples}</small>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="ml-2">Back</span>
        </button>
        <button 
          className="next-btn"
          disabled={!selectedLevel}
          onClick={handleNext}
        >
          <span className="mr-2">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Estimate;