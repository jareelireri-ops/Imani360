import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="app-footer">
      <div className="footer-grid">
        <div className="footer-left">
          <h4>Light Sanctuary</h4>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} All Rights Reserved. Toll-Station, Thika Road.</p>
        </div>
        <div className="footer-right">
          <span className="footer-link" onClick={() => navigate('/prayers')}>Get Help</span>
          <span className="footer-link" onClick={() => navigate('/giving')}>Support Us</span>
          
          {/* Discrete Settings Access Point */}
          <span className="footer-link" style={{ opacity: 0.6, borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '16px' }} onClick={() => navigate('/settings')}>
            Settings
          </span>

          {/* Discrete Staff Access Point */}
          <span className="footer-link" style={{ opacity: 0.6, borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '16px' }} onClick={() => navigate('/admin')}>
            Admin Portal
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;