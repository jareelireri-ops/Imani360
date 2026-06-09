import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MegaphoneSimple, CalendarBlank, HandsPraying, HandHeart } from '@phosphor-icons/react';

const CardPointer = () => (
  <div className="spiritual-pointer" style={{ left: 'var(--x)', top: 'var(--y)' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <line x1="7" y1="8" x2="17" y2="8"></line>
    </svg>
  </div>
);

const PathwaysGrid = () => {
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="content-section">
      {/* Dynamic Icon Animations CSS (Layout-Safe Micro-interactions) */}
      <style>{`
        /* Master transition for your existing wrapper */
        .card-icon-wrapper {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease, border-color 0.3s ease;
          position: relative;
        }

        .pathway-card:hover .card-icon-wrapper {
          transform: scale(1.05);
        }

        /* CARD 1: Megaphone Broadcast Wave Effect */
        .pathway-card:hover .icon-notices {
          animation: broadcastTilt 0.6s ease-in-out infinite alternate;
        }
        @keyframes broadcastTilt {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(-8deg) scale(1.05); }
        }

        /* CARD 2: Calendar Page Flip Bounce */
        .pathway-card:hover .icon-events {
          animation: calendarFlip 0.8s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
        }
        @keyframes calendarFlip {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-4px) scaleY(0.9); }
          100% { transform: translateY(-4px) scaleY(1); }
        }

        /* CARD 3: Prayers Breathing Levitation Glide */
        .pathway-card:hover .icon-prayers {
          animation: prayerFloat 1.6s ease-in-out infinite;
        }
        @keyframes prayerFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }

        /* CARD 4: Giving Dynamic Heartbeat */
        .pathway-card:hover .icon-giving {
          animation: givingHeartbeat 0.9s ease-in-out infinite;
        }
        @keyframes givingHeartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.12); }
          28% { transform: scale(1); }
          42% { transform: scale(1.12); }
          70% { transform: scale(1); }
        }
      `}</style>

      <div className="huge-watermark">Imani</div>
      
      <div className="section-header-box">
        <span className="section-mini-tag">Pathways</span>
        <h2 className="section-main-title">Explore the Ministry</h2>
      </div>

      <div className="pathways-grid">
        {/* Card 1: Notices */}
        <div className="pathway-card" onMouseMove={handleMouseMove} onClick={() => navigate('/notices')}>
          <CardPointer />
          <div className="card-meta-top">
            <div className="card-icon-wrapper">
              <div className="icon-notices" style={{ display: 'flex' }}>
                <MegaphoneSimple size={30} weight="regular" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Church Notices</h3>
            <p className="card-text">Stay updated with important announcements and notices all in.</p>
          </div>
        </div>

        {/* Card 2: Events */}
        <div className="pathway-card" onMouseMove={handleMouseMove} onClick={() => navigate('/events')}>
          <CardPointer />
          <div className="card-meta-top">
            <div className="card-icon-wrapper">
              <div className="icon-events" style={{ display: 'flex' }}>
                <CalendarBlank size={30} weight="regular" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Events &amp; Calendar</h3>
            <p className="card-text">Explore upcoming fellowships, church events, and holy celebrations.</p>
          </div>
        </div>

        {/* Card 3: Prayers */}
        <div className="pathway-card" onMouseMove={handleMouseMove} onClick={() => navigate('/prayers')}>
          <CardPointer />
          <div className="card-meta-top">
            <div className="card-icon-wrapper">
              <div className="icon-prayers" style={{ display: 'flex' }}>
                <HandsPraying size={30} weight="regular" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Prayers &amp; Connect</h3>
            <p className="card-text">Submit your personal prayer requests either anonymously or with your details.</p>
          </div>
        </div>

        {/* Card 4: Giving */}
        <div className="pathway-card" onMouseMove={handleMouseMove} onClick={() => navigate('/giving')}>
          <CardPointer />
          <div className="card-meta-top">
            <div className="card-icon-wrapper">
              <div className="icon-giving" style={{ display: 'flex' }}>
                <HandHeart size={30} weight="regular" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Giving &amp; Tithes</h3>
            <p className="card-text">Support the expansion and growth of our sanctuary safely. Complete and track your tithes and thanks giving.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysGrid;