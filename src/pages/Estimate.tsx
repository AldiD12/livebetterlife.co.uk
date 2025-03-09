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
        <button className="back-btn">← Back</button>
        <button 
          className="next-btn"
          disabled={!selectedLevel}
          onClick={handleNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Estimate;