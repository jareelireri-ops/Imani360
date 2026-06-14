import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle, Radio, Sparkle } from '@phosphor-icons/react';


const SLIDES = [
  `${import.meta.env.BASE_URL}church-images/logo.jpg`, // Logo is now the main/first picture
  `${import.meta.env.BASE_URL}church-images/photo1.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo2.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo3.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo4.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo5.jpg`,
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 7000); // Transitions exactly every 7 seconds
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-bg-slider">
      {SLIDES.map((src, i) => (
        <img key={i} src={src} alt="" className={i === current ? 'active' : ''} />
      ))}
    </div>
  );
};

const HeroSection = ({ onWatchClick, onListenClick }) => {
  const navigate = useNavigate();

  return (
    <section className="premium-hero">
      <HeroSlider />

      <div className="hero-badge">
        <Sparkle size={14} weight="fill" />
        <span>Welcome to CCI Light Sanctuary</span>
      </div>
      <h1 className="hero-title">Experience The Light of Christian Church International</h1>
      <p className="hero-desc">
        A warm community gathering together to discover purpose, pursue God, and fellowship in love. 
        Join us for inspiring sermons, uplifting worship, and transformative connections. Your spiritual home awaits.
      </p>

      <div className="cta-cluster">
        {/* Triggers the beautifully styled Crimson Red modal on the HomeScreen */}
        <div className="cta-btn cta-btn-primary" onClick={onWatchClick}>
          <PlayCircle size={22} weight="fill" />
          <span>Stream Live Sermon</span>
        </div>
        
        {/* Triggers the beautifully styled Crimson Red modal on the HomeScreen */}
        <div className="cta-btn cta-btn-secondary" onClick={onListenClick}>
          <Radio size={22} weight="fill" />
          <span>Listen Live</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;