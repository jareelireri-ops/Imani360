import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import CCILogo from '../assets/images/cci-logo.png';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Events',     path: '/events' },
  { label: 'Contact',    path: '/contact' },
];

const Navbar = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,600;1,400&family=Montserrat:wght@500;700;900&display=swap');

        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        /* CONCEPT 2: PREMIUM HIGH-CONTRAST SLATE SKY GLASS GLASSMISM */
        .cci-navbar {
          width: 100%;
          box-sizing: border-box;
          background: rgba(30, 41, 59, 0.75); /* Richer Slate backdrop for extreme text contrast */
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(12px, 4vw, 32px);
          height: clamp(58px, 10vw, 72px);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cci-navbar__left {
          display: flex;
          align-items: center;
          gap: clamp(8px, 2vw, 14px);
          cursor: pointer;
          flex-shrink: 0;
        }

        .cci-navbar__logo {
          width: clamp(40px, 9vw, 58px);
          height: clamp(40px, 9vw, 58px);
          object-fit: contain;
          mix-blend-mode: normal; /* Preserves logo colors perfectly on the slate layout */
        }

        .cci-navbar__name-block {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .cci-navbar__name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(10px, 2.2vw, 14px);
          color: #ffffff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .cci-navbar__tagline {
          font-family: 'Crimson Text', serif;
          font-style: italic;
          font-size: clamp(11px, 2.5vw, 16px);
          color: #cbd5e1; /* Clear light silver-blue color */
          letter-spacing: 0.5px;
        }

        .cci-navbar__links {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 32px);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cci-navbar__links li a,
        .cci-navbar__links li span {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(11px, 1.8vw, 14px);
          color: #94a3b8; /* Highly visible slate-grey link color */
          text-decoration: none;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
        }

        .cci-navbar__links li span:hover,
        .cci-navbar__links li a:hover { 
          color: #ffffff; 
        }

        /* Active link indicator styled with the Logo Blue Token */
        .cci-navbar__links li span.active { 
          color: #ffffff; 
          border-bottom: 2px solid #0284c7; /* Clear Logo Blue active underline */
        }

        .cci-navbar__hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #ffffff;
          display: none;
        }

        .cci-navbar__drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(280px, 80vw);
          height: 100vh;
          background: #1e293b;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 200;
          display: flex;
          flex-direction: column;
          padding: clamp(20px, 5vw, 32px);
          gap: 24px;
          transform: translateX(100%);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cci-navbar__drawer.open { transform: translateX(0); }

        .cci-navbar__drawer-close {
          align-self: flex-end;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
        }

        .cci-navbar__drawer-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          list-style: none;
          padding: 0; margin: 0;
        }

        .cci-navbar__drawer-links li span {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(15px, 4vw, 18px);
          color: #94a3b8;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: color 0.18s;
        }

        .cci-navbar__drawer-links li span:hover { color: #ffffff; }
        .cci-navbar__drawer-links li span.active { color: #0284c7; }

        .cci-navbar__overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          z-index: 199;
          display: none;
        }
        .cci-navbar__overlay.open { display: block; }

        @media (max-width: 640px) {
          .cci-navbar__links    { display: none; }
          .cci-navbar__hamburger { display: flex; }
        }
      `}</style>

      <nav className="cci-navbar">
        <div className="cci-navbar__left" onClick={() => navigate('/')}>
          <img src={CCILogo} alt="CCI Logo" className="cci-navbar__logo" />
          <div className="cci-navbar__name-block">
            <span className="cci-navbar__name">Christian Church International</span>
            <span className="cci-navbar__tagline">Light-Sanctuary</span>
          </div>
        </div>

        <ul className="cci-navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <span
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>

        <button className="cci-navbar__hamburger" onClick={() => setOpen(true)}>
          <List size={28} weight="bold" />
        </button>
      </nav>

      <div className={`cci-navbar__overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`cci-navbar__drawer ${open ? 'open' : ''}`}>
        <button className="cci-navbar__drawer-close" onClick={() => setOpen(false)}>
          <X size={26} weight="bold" />
        </button>
        <ul className="cci-navbar__drawer-links">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <span
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => { navigate(link.path); setOpen(false); }}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;