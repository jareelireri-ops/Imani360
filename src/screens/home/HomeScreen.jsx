import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { CaretRight, X } from '@phosphor-icons/react';

import Navbar from '../../components/Navbar';
import Breadcrumb from '../../components/Breadcrumbs';
import Footer from '../../components/Footer';

import HeroSection from './HeroSection';
import MarqueeStrip from './MarqueeStrip';
import PathwaysGrid from './PathwaysGrid';

import '../../styles/Home.css';

gsap.registerPlugin(ScrollTrigger);

const HomeScreen = () => {
  const navigate = useNavigate();
  
  // State control for the full "Service Unavailable" modal window
  const [showSermonsModal, setShowSermonsModal] = useState(false);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  
  const modalOverlayRef = useRef(null);
  const modalContentRef = useRef(null);

  const baseUrl = import.meta.env.BASE_URL;

  // Handle opening the popup for any watch/listen actions across the page
  const openSermonsModal = () => {
    setShowSermonsModal(true);
  };

  // Handle closing the popup with a clean GSAP exit sequence
  const closeSermonsModal = () => {
    if (modalOverlayRef.current && modalContentRef.current) {
      gsap.to(modalContentRef.current, { scale: 0.9, opacity: 0, duration: 0.25, ease: 'power2.in' });
      gsap.to(modalOverlayRef.current, { 
        opacity: 0, 
        duration: 0.25, 
        onComplete: () => setShowSermonsModal(false) 
      });
    } else {
      setShowSermonsModal(false);
    }
  };

  // Entrance animations whenever the modal launches
  useEffect(() => {
    if (showSermonsModal && modalOverlayRef.current && modalContentRef.current) {
      gsap.fromTo(modalOverlayRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(modalContentRef.current, 
        { scale: 0.85, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, [showSermonsModal]);

  useEffect(() => {
    const rows = [row1Ref.current, row2Ref.current, row3Ref.current];

    rows.forEach((row) => {
      if (!row) return;

      const textElements = row.querySelectorAll('.animate-text');
      const imageElement = row.querySelector('.animate-image');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 85%', 
          toggleActions: 'play none none reverse',
        }
      });

      tl.fromTo(textElements, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      tl.fromTo(imageElement,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.6'
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#060d22', 
      color: '#ffffff', 
      fontFamily: "system-ui, -apple-system, sans-serif", 
      overflowX: 'hidden', 
      position: 'relative' 
    }}>
      
      <style>{`
        /* Continuous looping background effect */
        .animated-loop-bg {
          background: linear-gradient(135deg, #021526, #1e3a8a, #0b1329, #111827, #021526);
          background-size: 400% 400%;
          animation: backgroundLoop 20s ease infinite; 
          width: 100%;
        }

        @keyframes backgroundLoop {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .feature-row-section {
          width: 100%;
          position: relative;
          z-index: 10;
        }
        
        .feature-row {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding: clamp(50px, 6vw, 80px) 40px;
        }

        /* Full horizontal string of small white crosses mimicking edited-image.png */
        .cross-divider-line {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          padding: 24px 0;
          opacity: 0.35; 
        }

        .cross-string {
          color: #ffffff;
          font-family: 'Courier New', Courier, monospace;
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 12px; 
        }

        /* ── MODAL WINDOW SYSTEM STYLES (Fixed to match Blue, Red, White theme perfectly) ── */
        .modal-blur-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
        }

        .custom-popup-window {
          background: #0f172a; 
          border-radius: 24px;
          width: 100%;
          max-width: 440px;
          padding: 40px 32px 36px 32px;
          position: relative;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25); 
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-close-icon-btn {
          position: absolute;
          top: 20px;
          right: 22px;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close-icon-btn:hover {
          color: #ffffff;
        }

        .logo-container-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #060d22;
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .modal-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-main-title {
          font-family: 'Montserrat', -apple-system, sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff; /* Branded Pure White Header Text */
          margin: 0 0 14px 0;
          letter-spacing: -0.3px;
        }

        .modal-body-text {
          font-family: 'Montserrat', -apple-system, sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7); /* Clean Off-White */
          margin: 0 0 16px 0;
          max-width: 360px;
        }

        .modal-signature {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 13px;
          color: #38bdf8; /* FIXED: Shifted from yellow to clean Electric Theme Blue */
          margin: 0 0 28px 0;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .modal-amen-btn {
          width: 100%;
          max-width: 160px;
          background: linear-gradient(180deg, #dc2626, #b91c1c); /* FIXED: Shifted from yellow to Crimson Red */
          color: #ffffff; /* Branded Crisp White text */
          border: none;
          padding: 14px 0;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
          transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
        }

        .modal-amen-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(180deg, #ef4444, #dc2626);
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.6);
        }

        @media (max-width: 968px) {
          .feature-row {
            flex-direction: column !important;
            text-align: center;
            gap: 40px;
            padding: 40px 24px;
          }
        }
        .text-container {
          flex: 1;
          max-width: 540px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 968px) {
          .text-container { align-items: center; max-width: 100%; }
        }
        .row-tag {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(11px, 2.2vw, 13px);
          color: #38bdf8;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 12px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .row-title {
          font-family: 'Crimson Text', serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 20px 0;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }
        .row-description {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(14px, 2.5vw, 16px);
          color: rgba(230, 240, 255, 0.9);
          line-height: 1.6;
          margin: 0 0 32px 0;
          text-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }
        .row-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #060d22;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .row-btn:hover {
          transform: translateY(-2px);
          background-color: #f0f4f8;
          box-shadow: 0 8px 24px rgba(56, 189, 248, 0.4);
        }
        @media (max-width: 968px) {
          .row-btn { align-self: center; }
        }
        .image-container {
          flex: 1.1;
          width: 100%;
          max-width: 620px;
          aspect-ratio: 4 / 3;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.05); 
        }
        .row-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      {/* ── TOP SECTION: Pass dynamic functional callbacks to Hero Section ── */}
      <div style={{ position: 'relative', zIndex: 30, backgroundColor: '#060d22' }}>
        <Navbar />
        <Breadcrumb crumbs={[{ label: 'Home', path: '/' }]} />
        <HeroSection onWatchClick={openSermonsModal} onListenClick={openSermonsModal} />
        <MarqueeStrip />
      </div>

      {/* ── BACKGROUND GRADIENT SHADER WRAPPER ── */}
      <div className="animated-loop-bg" style={{ position: 'relative', zIndex: 20 }}>
        
        <PathwaysGrid />

        <div className="cross-divider-line">
          <span className="cross-string">++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span>
        </div>

        {/* ── ROW 1: PLEDGES & GIVING ── */}
        <div ref={row1Ref} style={{ background: 'transparent', position: 'relative', zIndex: 20 }}>
          <div className="feature-row">
            <div className="text-container">
              <span className="row-tag animate-text" style={{ color: '#38bdf8' }}>Pledges & Giving</span>
              <h2 className="row-title animate-text">Empower Our Shared Mission. 2 Corinthians 9:7</h2>
              <p className="row-description animate-text">
                Looking to tithe, donate or make a lasting impact? Submit your financial commitment and support advancement of the Kingdom from anywhere.
              </p>
              <button className="row-btn animate-text" onClick={() => navigate('/giving')}>
                Make a Pledge <CaretRight size={16} weight="bold" />
              </button>
            </div>
            <div className="image-container animate-image">
              <img 
                src={`${baseUrl}church-images/pledge.jpg`} 
                alt="Community support and giving" 
                className="row-img" 
              />
            </div>
          </div>
        </div>
        
        <div className="cross-divider-line">
          <span className="cross-string">++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span>
        </div>

        <div className="feature-row-section">
          {/* ── ROW 2: MEMBERS CONNECT ── */}
          <div ref={row2Ref} className="feature-row" style={{ flexDirection: 'row-reverse' }}>
            <div className="text-container">
              <span className="row-tag animate-text">Members Connect</span>
              <h2 className="row-title animate-text">Find Your Community. Hebrews 10:24</h2>
              <p className="row-description animate-text">
                We are not meant to walk alone. Dive into your preferred group, connect with other members and participate in church activities as we grow our faith together.
              </p>
              <button className="row-btn animate-text" onClick={() => navigate('/members-connect')}>
                Join a Group <CaretRight size={16} weight="bold" />
              </button>
            </div>
            <div className="image-container animate-image">
              <img 
                src={`${baseUrl}church-images/MembersConnect.jpg`}
                alt="Authentic, joyful church group sharing fellowship" 
                className="row-img" 
              />
            </div>
          </div>

          <div className="cross-divider-line">
            <span className="cross-string">++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span>
          </div>

          {/* ── ROW 3: PREVIOUS SERMONS ── */}
          <div ref={row3Ref} className="feature-row">
            <div className="text-container">
              <span className="row-tag animate-text">Media Vault</span>
              <h2 className="row-title animate-text">Previous Sermons</h2>
              <p className="row-description animate-text">
                Missed a service or want to rewatch a powerful message? Explore our catalog of past video teachings and structural revelations to keep your spirit nourished.
              </p>
              <button className="row-btn animate-text" onClick={openSermonsModal}>
                Watch Sermons <CaretRight size={16} weight="bold" />
              </button>
            </div>
            <div className="image-container animate-image">
              <img 
                src={`${baseUrl}church-images/photo1.jpg`} 
                alt="Archive of previous church message streams" 
                className="row-img" 
              />
            </div>
          </div>
        </div>
        
      </div>

      {/* ── FULLY THEMED MODAL POPUP WINDOW ── */}
      {showSermonsModal && (
        <div ref={modalOverlayRef} className="modal-blur-overlay" onClick={closeSermonsModal}>
          <div ref={modalContentRef} className="custom-popup-window" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close-icon-btn" onClick={closeSermonsModal}>
              <X size={18} weight="bold" />
            </button>

            <div className="logo-container-circle">
              <img 
                src={`${baseUrl}church-images/logo.jpg`} 
                alt="Church Logo" 
                className="modal-logo-img"
              />
            </div>

            <h3 className="modal-main-title">Service Unavailable</h3>

            <p className="modal-body-text">
              Our Media Vault broadcast is currently offline. Please join us during our scheduled service times or check back later!
            </p>

            {/* Now uses clean, high-contrast theme Electric Blue */}
            <p className="modal-signature">Blessings, CCI Light Sanctuary</p>

            {/* Now uses powerful Crimson Red instead of yellow */}
            <button className="modal-amen-btn" onClick={closeSermonsModal}>
              Amen
            </button>

          </div>
        </div>
      )}

      {/* ── BOTTOM FOOTER CONTAINER ── */}
      <div style={{ position: 'relative', zIndex: 30, backgroundColor: '#060d22' }}>
        <Footer />
      </div>
      
    </div>
  );
};

export default HomeScreen;