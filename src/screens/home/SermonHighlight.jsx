import React from 'react';
import { useNavigate } from 'react-router-dom';

const SermonHighlight = () => {
  const navigate = useNavigate();

  return (
    <section className="sermon-highlight-row">
      <div className="sermon-container">
        <div className="sermon-pane-left">
          <span className="section-mini-tag" style={{ color: '#38bdf8' }}>Latest Broadcast</span>
          <h2 className="section-main-title" style={{ color: '#ffffff', marginBottom: '24px' }}>Catch Up On Recent Sermons</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            Missed a service or looking to dive deeper? Watch or download structural teachings and high-impact praise sessions from any time.
          </p>
          <div className="cta-btn cta-btn-primary" style={{ display: 'inline-flex' }} onClick={() => navigate('/archive')}>
            <span>Browse Archive</span>
          </div>
        </div>
        <div className="sermon-pane-right">
          {/* Swapped link to a highly relevant church sanctuary preaching / broadcast image */}
          <img src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1200" alt="Sermon Broadcast Showcase" />
        </div>
      </div>
    </section>
  );
};

export default SermonHighlight;