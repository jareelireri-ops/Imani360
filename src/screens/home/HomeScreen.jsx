import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Breadcrumb from '../../components/Breadcrumbs';
import {
  MegaphoneSimple,
  CalendarBlank,
  HandsPraying,
  HandHeart,
  PlayCircle,
  Radio,
  Sparkle
} from '@phosphor-icons/react';

// ── SLIDESHOW IMAGES ──
// Add or remove filenames as needed
// This dynamically resolves to include your /Imani360/ path automatically
const SLIDES = [
  `${import.meta.env.BASE_URL}church-images/photo1.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo2.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo3.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo4.jpg`,
  `${import.meta.env.BASE_URL}church-images/photo5.jpg`,
];

const HeroSlider = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 7000);
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

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#303942', color: '#ffffff', fontFamily: "system-ui, -apple-system, sans-serif", overflowX: 'hidden', position: 'relative' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&display=swap');

        nav, .navbar, [class*="Navbar"], [class*="Breadcrumb"] {
          background: rgba(30, 41, 59, 0.4) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
        }

        .slate-glow-blue {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 70vw;
          height: 60vh;
          background: radial-gradient(circle at center, rgba(2, 132, 199, 0.15) 0%, rgba(30, 41, 59, 0) 70%);
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .slate-glow-red {
          position: absolute;
          top: 50%;
          right: -10%;
          width: 60vw;
          height: 60vh;
          background: radial-gradient(circle at center, rgba(220, 38, 38, 0.08) 0%, rgba(30, 41, 59, 0) 70%);
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        /* ── HERO BACKGROUND SLIDESHOW ── */
        .hero-bg-slider {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .hero-bg-slider img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.8s ease-in-out;
        }

        .hero-bg-slider img.active {
          opacity: 0.22;
        }

        /* ── HERO CHAMBER ── */
        .premium-hero {
          position: relative;
          min-height: 85vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 120px 24px 100px 24px;
          background: transparent;
          z-index: 2;
        }

        /* Dark gradient overlay sits ABOVE slider but BELOW text */
        .premium-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(20, 30, 48, 0.6) 0%, rgba(30, 41, 59, 0.92) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* All hero children float above the overlay */
        .hero-badge,
        .hero-title,
        .hero-desc,
        .cta-cluster {
          position: relative;
          z-index: 3;
        }

        .hero-badge {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 10px 22px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 32px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.05);
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(40px, 7.5vw, 82px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          max-width: 1100px;
          margin: 0 auto 28px auto;
          color: #ffffff;
        }

        .hero-desc {
          font-size: clamp(16px, 2.2vw, 20px);
          font-weight: 400;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 54px auto;
          line-height: 1.7;
        }

        .cta-cluster {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-primary {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .cta-btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(2, 132, 199, 0.3);
        }

        .cta-btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }

        /* ── MARQUEE STRIP ── */
        .marquee-container {
          background: rgba(15, 23, 42, 0.4);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding: 24px 0;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          position: relative;
          z-index: 2;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: smoothMarqueeLoop 35s linear infinite;
        }

        .marquee-text {
          font-family: 'Cinzel', serif;
          font-size: 15px;
          font-weight: 700;
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          padding-right: 60px;
        }

        .marquee-text span {
          color: #ef4444;
          margin: 0 24px;
          font-weight: 900;
        }

        @keyframes smoothMarqueeLoop {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        /* ── PATHWAYS GRID ── */
        .content-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 140px 24px;
          position: relative;
          z-index: 2;
        }

        .section-header-box {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-mini-tag {
          font-size: 12px;
          font-weight: 800;
          color: #ef4444;
          text-transform: uppercase;
          letter-spacing: 5px;
          margin-bottom: 16px;
          display: block;
        }

        .section-main-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(36px, 4.5vw, 54px);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
        }

        .huge-watermark {
          position: absolute;
          left: 50%;
          top: 220px;
          transform: translateX(-50%);
          font-size: clamp(120px, 18vw, 260px);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.006);
          letter-spacing: -6px;
          pointer-events: none;
          user-select: none;
          text-transform: uppercase;
          z-index: 1;
        }

        .pathways-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 900px) {
          .pathways-grid { grid-template-columns: 1fr; }
        }

        .pathway-card {
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(24px) saturate(120%);
          -webkit-backdrop-filter: blur(24px) saturate(120%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 54px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 300px;
          cursor: none !important;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .pathway-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(2, 132, 199, 0.12), transparent 45%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .pathway-card:hover::before {
          opacity: 1;
        }

        .pathway-card:hover {
          transform: translateY(-6px);
          border-color: rgba(2, 132, 199, 0.4);
          background: rgba(23, 37, 66, 0.6);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.4);
        }

        .spiritual-pointer {
          position: absolute;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
          transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: #38bdf8;
          filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.5));
          z-index: 10;
        }

        .pathway-card:hover .spiritual-pointer {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .card-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .card-icon-wrapper {
          width: 68px;
          height: 68px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pathway-card:hover .card-icon-wrapper {
          background: #0284c7;
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 0 25px rgba(2, 132, 199, 0.4);
        }

        .card-body {
          margin-top: 54px;
          position: relative;
          z-index: 2;
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          letter-spacing: -0.4px;
        }

        .card-text {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
          line-height: 1.7;
        }

        /* ── SERMON HIGHLIGHT ROW ── */
        .sermon-highlight-row {
          background: #0f172a;
          color: #ffffff;
          padding: 140px 24px;
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .sermon-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 950px) {
          .sermon-container { grid-template-columns: 1fr; gap: 40px; }
        }

        .sermon-pane-left {
          max-width: 520px;
        }

        .sermon-pane-right img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 50px 100px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.06);
        }
      `}</style>

      {/* Ambient Backlighting */}
      <div className="slate-glow-blue"></div>
      <div className="slate-glow-red"></div>

      {/* Nav */}
      <div style={{ position: 'relative', zIndex: 30 }}>
        <Navbar />
        <Breadcrumb crumbs={[{ label: 'Home', path: '/' }]} />
      </div>

      {/* HERO */}
      <section className="premium-hero">

        {/* Slideshow sits at z-index 0, overlay ::after at z-index 1, content at z-index 3 */}
        <HeroSlider />

        <div className="hero-badge">
          <Sparkle size={14} weight="fill" />
          <span>Welcome to the Light Sanctuary</span>
        </div>
        <h1 className="hero-title">Experience The Light of the Sanctuary</h1>
        <p className="hero-desc">
          A warm community gathering together to discover purpose, pursue God, and fellowship in love. 
          Join us for inspiring sermons, uplifting worship, and transformative connections. Your spiritual home awaits.
        </p>

        <div className="cta-cluster">
          <div className="cta-btn cta-btn-primary" onClick={() => navigate('/watch')}>
            <PlayCircle size={22} weight="fill" />
            <span>Watch Live</span>
          </div>
          <div className="cta-btn cta-btn-secondary" onClick={() => navigate('/listen')}>
            <Radio size={22} weight="fill" />
            <span>Listen Live</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-text">
            Welcome Home <span>•</span> Join Us This Sunday. We are located at Toll-Station along Thika Road. <span>•</span> Experience Faith <span>•</span> Light Sanctuary
          </div>
          <div className="marquee-text">
            Welcome Home <span>•</span> Join Us This Sunday. We are located at Toll-Station along Thika Road. <span>•</span> Experience Faith <span>•</span> Light Sanctuary
          </div>
        </div>
      </div>

      {/* MINISTRIES GRID */}
      <section className="content-section">
        <div className="huge-watermark">Imani</div>
        
        <div className="section-header-box">
          <span className="section-mini-tag">Pathways</span>
          <h2 className="section-main-title">Explore the Ministry</h2>
        </div>

        <div className="pathways-grid">
          
          {/* Card 1: Notices */}
          <div className="pathway-card" 
               onMouseMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                 e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
               }}
               onClick={() => navigate('/notices')}>
            <div className="spiritual-pointer" style={{ left: 'var(--x)', top: 'var(--y)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="7" y1="8" x2="17" y2="8"></line>
              </svg>
            </div>
            <div className="card-meta-top">
              <div className="card-icon-wrapper">
                <MegaphoneSimple size={30} weight="regular" />
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">Church Notices</h3>
              <p className="card-text">Stay updated with important announcements and notices all in.</p>
            </div>
          </div>

          {/* Card 2: Events */}
          <div className="pathway-card" 
               onMouseMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                 e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
               }}
               onClick={() => navigate('/events')}>
            <div className="spiritual-pointer" style={{ left: 'var(--x)', top: 'var(--y)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="7" y1="8" x2="17" y2="8"></line>
              </svg>
            </div>
            <div className="card-meta-top">
              <div className="card-icon-wrapper">
                <CalendarBlank size={30} weight="regular" />
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">Events &amp; Calendar</h3>
              <p className="card-text">Explore upcoming fellowships, church events, and holy celebrations.</p>
            </div>
          </div>

          {/* Card 3: Prayers */}
          <div className="pathway-card" 
               onMouseMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                 e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
               }}
               onClick={() => navigate('/prayers')}>
            <div className="spiritual-pointer" style={{ left: 'var(--x)', top: 'var(--y)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="7" y1="8" x2="17" y2="8"></line>
              </svg>
            </div>
            <div className="card-meta-top">
              <div className="card-icon-wrapper">
                <HandsPraying size={30} weight="regular" />
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">Prayers &amp; Connect</h3>
              <p className="card-text">Submit your personal prayer requests either anonymously or with your details.</p>
            </div>
          </div>

          {/* Card 4: Giving */}
          <div className="pathway-card" 
               onMouseMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                 e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
               }}
               onClick={() => navigate('/giving')}>
            <div className="spiritual-pointer" style={{ left: 'var(--x)', top: 'var(--y)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="7" y1="8" x2="17" y2="8"></line>
              </svg>
            </div>
            <div className="card-meta-top">
              <div className="card-icon-wrapper">
                <HandHeart size={30} weight="regular" />
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">Giving &amp; Tithes</h3>
              <p className="card-text">Support the expansion and growth of our sanctuary safely. Complete and track your tithes and thanks giving.</p>
            </div>
          </div>

        </div>
      </section>

      {/* BROADCAST SECTION */}
      <section className="sermon-highlight-row">
        <div className="sermon-container">
          <div className="sermon-pane-left">
            <span className="section-mini-tag" style={{ color: '#38bdf8' }}>Latest Broadcast</span>
            <h2 className="section-main-title" style={{ color: '#ffffff', marginBottom: '24px' }}>Catch Up On Recent Sermons</h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
              Missed a service or looking to dive deeper? Watch or download structural teachings and high-impact praise sessions from any time.
            </p>
            <div className="cta-btn cta-btn-primary" style={{ display: 'inline-flex' }} onClick={() => navigate('/more')}>
              <span>Browse Archive</span>
            </div>
          </div>
          <div className="sermon-pane-right">
            <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200" alt="Sermon Broadcast Showcase" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;