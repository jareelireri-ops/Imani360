import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CCILogo from '../../assets/images/cci-logo.png';
import Navbar from '../../components/Navbar';
import Breadcrumb from '../../components/Breadcrumbs';  
import {
  CurrencyDollar,
  VideoCamera,
  UsersThree,
  Gear,
  LockKey,
  Wrench,
  ArrowLeft,
  House,
  CaretRight,
} from '@phosphor-icons/react';

const MoreScreen = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const cards = [
    { Icon: CurrencyDollar, label: 'PLEDGES',          sub: 'Commitments & giving pledges', route: '/pledges' },
    { Icon: VideoCamera,    label: 'PREVIOUS SERMONS',  sub: 'Watch past messages',          route: '/previous-sermons' },
    { Icon: UsersThree,     label: 'MEMBERS CONNECT',   sub: 'Community',                    route: '/members-connect' },
    { Icon: Gear,           label: 'SETTINGS',          sub: 'App preferences',              route: '/settings' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        fontFamily: "'Montserrat', sans-serif",
        overflowX: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=Montserrat:wght@400;600;700;900&display=swap');

        .hero-section {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 5vw, 48px) clamp(16px, 5vw, 48px) clamp(60px, 10vw, 90px);
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(ellipse 55% 40% at 25% 55%, rgba(0,200,255,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 45% 30% at 78% 42%, rgba(0,160,230,0.11) 0%, transparent 70%),
            radial-gradient(ellipse 75% 50% at 50% 95%, rgba(0,100,200,0.20) 0%, transparent 65%),
            radial-gradient(ellipse 38% 28% at 12% 28%, rgba(120,210,255,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 32% 22% at 88% 78%, rgba(0,180,255,0.09) 0%, transparent 60%),
            linear-gradient(172deg, #0b2070 0%, #0e4dab 38%, #0a6cc6 68%, #0880d5 100%);
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(106deg, transparent 18%, rgba(180,230,255,0.07) 28%, transparent 38%),
            linear-gradient(101deg, transparent 44%, rgba(180,230,255,0.055) 51%, transparent 61%),
            linear-gradient(109deg, transparent 62%, rgba(180,230,255,0.065) 70%, transparent 80%);
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 48px;
          background: linear-gradient(180deg, rgba(160,225,255,0.14) 0%, transparent 100%);
          pointer-events: none;
        }

        .hero-logo {
          position: absolute;
          top: clamp(10px, 3vw, 18px);
          left: clamp(12px, 3.5vw, 20px);
          width: clamp(48px, 11vw, 68px);
          height: clamp(48px, 11vw, 68px);
          object-fit: contain;
          z-index: 5;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
        }

        /* top nav row: back + home */
        .hero-nav {
          width: 100%;
          max-width: 720px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 4;
          margin-bottom: 20px;
        }

        .nav-icon-btn {
          width: clamp(44px, 10vw, 54px);
          height: clamp(44px, 10vw, 54px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1.5px solid rgba(255,255,255,0.25);
          background: rgba(10,30,100,0.4);
          backdrop-filter: blur(6px);
          transition: background 0.18s;
        }
        .nav-icon-btn:hover { background: rgba(10,30,100,0.65); }

        /* hero-logo kept for possible future use */

        .cross-glow {
          font-size: clamp(32px, 7vw, 46px);
          color: #ffffff;
          text-shadow:
            0 0 18px rgba(255,255,255,0.75),
            0 0 38px rgba(255,215,0,0.5),
            0 0 60px rgba(255,215,0,0.3);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.35));
          line-height: 1;
          position: relative;
          z-index: 2;
          margin-bottom: 6px;
        }

        .screen-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(10px, 2vw, 12px);
          color: rgba(180,225,255,0.6);
          letter-spacing: 4px;
          text-transform: uppercase;
          position: relative;
          z-index: 2;
          margin-bottom: 8px;
        }

        .wave-divider {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 72px;
          z-index: 3;
        }

        /* ── BODY ── */
        .body-section {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 20px 40px;
          position: relative;
          background:
            radial-gradient(ellipse 70% 50% at 15% 20%, rgba(99,140,210,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 60% 40% at 85% 75%, rgba(80,120,200,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 35% at 50% 100%, rgba(110,150,220,0.07) 0%, transparent 60%),
            linear-gradient(160deg, #eef1f8 0%, #e8edf6 30%, #eaecf4 60%, #eff1f8 100%);
        }

        .body-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(100,130,200,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,130,200,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .cards-list {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 2.5vw, 14px);
          width: 100%;
          max-width: 720px;
          position: relative;
          z-index: 2;
        }

        .nav-card {
          display: flex;
          align-items: center;
          gap: clamp(14px, 3vw, 20px);
          padding: clamp(14px, 3vw, 20px) clamp(16px, 3.5vw, 24px);
          border-radius: 18px;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s;
          background: linear-gradient(135deg, #0ea5c8 0%, #0891b2 45%, #0c7a9e 75%, #0e6a8a 100%);
          border: 1.5px solid rgba(255,255,255,0.20);
          box-shadow:
            0 8px 20px rgba(8,100,150,0.30),
            0 2px 6px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.16),
            inset 0 -2px 8px rgba(0,0,0,0.12);
        }

        .nav-card:hover {
          transform: translateX(4px);
          box-shadow:
            0 12px 28px rgba(8,100,150,0.42),
            0 4px 10px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .card-icon-wrap {
          width: clamp(44px, 10vw, 54px);
          height: clamp(44px, 10vw, 54px);
          border-radius: 14px;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-text { display: flex; flex-direction: column; gap: 2px; flex: 1; }

        .card-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(12px, 2.8vw, 15px);
          color: #fff;
          line-height: 1.2;
          text-shadow: 0 1px 4px rgba(0,50,80,0.45);
          letter-spacing: 0.3px;
        }

        .card-sub {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(10px, 2vw, 12px);
          color: rgba(200,240,255,0.65);
          letter-spacing: 0.2px;
        }

        /* ── ADMIN / STAFF CARD ── */
        .auth-card {
          display: flex;
          align-items: center;
          gap: clamp(14px, 3vw, 20px);
          padding: clamp(14px, 3vw, 20px) clamp(16px, 3.5vw, 24px);
          border-radius: 18px;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s;
          width: 100%;
          max-width: 720px;
          position: relative;
          z-index: 2;
          margin-top: clamp(10px, 2.5vw, 14px);
          border: 1.5px solid rgba(255,255,255,0.20);
        }

        .auth-card:hover { transform: translateX(4px); }

        .auth-card.login {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 60%, #5b21b6 100%);
          box-shadow: 0 8px 20px rgba(109,40,217,0.35), inset 0 1px 0 rgba(255,255,255,0.16);
        }

        .auth-card.staff {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 60%, #15803d 100%);
          box-shadow: 0 8px 20px rgba(22,163,74,0.35), inset 0 1px 0 rgba(255,255,255,0.16);
        }

        .signout-btn {
          margin-top: 14px;
          background: none;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(9px, 2vw, 11px);
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(100,120,180,0.5);
          cursor: pointer;
          transition: color 0.2s;
          position: relative;
          z-index: 2;
        }
        .signout-btn:hover { color: #e05555; }
      `}</style>

      <Navbar />
      <Breadcrumb crumbs={[
        { label: 'Home', path: '/' },
        { label: 'More' },
      ]} />

      {/* ── HERO ── */}
      <div className="hero-section" style={{ width: '100%' }}>
        <img src={CCILogo} alt="CCI Logo" className="hero-logo" />

        {/* Back + Home nav */}
        <div className="hero-nav">          <div className="nav-icon-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={22} color="#fff" weight="bold" />
          </div>
          <div className="nav-icon-btn" onClick={() => navigate('/')}>
            <House size={22} color="#fff" weight="fill" />
          </div>
        </div>

        <div className="header-box">
          <p className="header-title">CHRISTIAN CHURCH INTERNATIONAL LIGHT-SANCTUARY</p>
        </div>

        <div className="cross-glow">✝</div>
        <p className="screen-label">More</p>

        <svg className="wave-divider" viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,46 C180,18 360,62 580,38 C800,14 1000,58 1200,36 C1320,24 1390,44 1440,36 L1440,72 L0,72 Z" fill="rgba(255,255,255,0.06)"/>
          <path d="M0,54 C200,32 420,70 680,48 C940,26 1160,64 1440,50 L1440,72 L0,72 Z" fill="rgba(255,255,255,0.07)"/>
          <path d="M0,62 C240,44 520,74 800,58 C1060,44 1280,68 1440,60 L1440,72 L0,72 Z" fill="#eef1f8"/>
        </svg>
      </div>

      {/* ── BODY ── */}
      <div className="body-section">

        {/* Main cards */}
        <div className="cards-list">
          {cards.map((card, i) => (
            <div key={i} className="nav-card" onClick={() => navigate(card.route)}>
              <div className="card-icon-wrap">
                <card.Icon size={26} weight="duotone" color="#fff" />
              </div>
              <div className="card-text">
                <span className="card-label">{card.label}</span>
                <span className="card-sub">{card.sub}</span>
              </div>
              <CaretRight size={20} color="rgba(255,255,255,0.30)" />
            </div>
          ))}
        </div>

        {/* Admin / Staff slot */}
        {!user ? (
          <div className="auth-card login" onClick={() => navigate('/admin')}>
            <div className="card-icon-wrap" style={{ background: 'rgba(255,255,255,0.13)' }}>
              <LockKey size={26} weight="duotone" color="#fff" />
            </div>
            <div className="card-text">
              <span className="card-label">LOG IN AS ADMIN</span>
              <span className="card-sub">Staff & leadership access</span>
            </div>
            <CaretRight size={20} color="rgba(255,255,255,0.30)" />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="auth-card staff" onClick={() => navigate('/staff-tools')}>
              <div className="card-icon-wrap" style={{ background: 'rgba(255,255,255,0.13)' }}>
                <Wrench size={26} weight="duotone" color="#fff" />
              </div>
              <div className="card-text">
                <span className="card-label">STAFF TOOLS</span>
                <span className="card-sub">Admin dashboard</span>
              </div>
              <CaretRight size={20} color="rgba(255,255,255,0.30)" />
            </div>
            <button
              className="signout-btn"
              onClick={() => { logout(); navigate('/'); }}
            >
              Sign out: {user.name}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default MoreScreen;