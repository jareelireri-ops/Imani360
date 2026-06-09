import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MegaphoneSimple, 
  CalendarBlank, 
  HandsPraying, 
  House, 
  CaretRight, 
  MagnifyingGlass, 
  ArrowLeft,
  UsersThree,
  Sparkle
} from '@phosphor-icons/react';

// ── 1. CONSTANT BRANDED HEADER COMPONENT (From image_35d4c2.jpg) ──
const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="global-site-header">
      <div className="header-inner">
        {/* Exact Logo Setup from Landing Page */}
        <div className="site-logo" onClick={() => navigate('/')}>
          <div className="logo-text-group">
            <h1 className="logo-main-title">CHRISTIAN CHURCH INTERNATIONAL</h1>
            <p className="logo-sub-title">Light-Sanctuary</p>
          </div>
        </div>

        {/* Exact Landing Page Navigation Menu */}
        <nav className="global-nav">
          <span className="nav-item" onClick={() => navigate('/')}>Home</span>
          <span className="nav-item" onClick={() => navigate('/about')}>About</span>
          <span className="nav-item" onClick={() => navigate('/ministries')}>Ministries</span>
          <span className="nav-item active" onClick={() => navigate('/notices')}>Notices</span>
          <span className="nav-item" onClick={() => navigate('/events')}>Events</span>
          <span className="nav-item" onClick={() => navigate('/contact')}>Contact</span>
        </nav>

        {/* Home Capsule from image_35d882.png */}
        <button className="header-home-capsule" onClick={() => navigate('/')}>
          <House size={18} weight="regular" />
        </button>
      </div>
    </header>
  );
};

// ── 2. CONSTANT BREADCRUMBS COMPONENT (Corrected from image_35d882.png) ──
const Breadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <div className="global-breadcrumbs">
      <div className="breadcrumbs-inner">
        <span className="crumb-link" onClick={() => navigate('/')}>
          <House size={13} style={{ marginRight: '5px', display: 'inline-block', verticalAlign: 'middle', marginTop: '-2px' }} />
          Home
        </span>
        <CaretRight size={10} className="crumb-separator" />
        <span className="crumb-current">Notices Feed</span>
      </div>
    </div>
  );
};

// ── 3. MASTER CHURCH NOTICES SCREEN ──
const NoticesScreen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Unified Chronological Database (Newest / Most Recent listed first)
  const ALL_NOTICES = [
    {
      id: 1,
      title: 'CCI Website Coming Soon!',
      text: 'Our brand-new digital home is almost ready. Track announcements, notices, and stay updated seamlessly.',
      dateLabel: 'Last Sunday',
      isPinned: true,
      icon: MegaphoneSimple,
      tag: '● CCI Website Coming Soon!'
    },
    {
      id: 2,
      title: 'Covenant Fellowship Night',
      text: 'Support the organization and growth of our community fellowships and holy celebrations.',
      dateLabel: 'This Week',
      isPinned: true,
      icon: UsersThree,
      tag: '[ COMMUNITY ]'
    },
    { id: 3, title: 'Volunteers Needed', text: 'Join our welcoming and ushering ministries for upcoming services.', dateLabel: '1 Week Ago', isPinned: false, icon: UsersThree },
    { id: 4, title: 'Youth Group Meeting', text: 'Friday youth gathering in the main sanctuary hall.', dateLabel: '2 Weeks Ago', isPinned: false, icon: CalendarBlank },
    { id: 5, title: 'Prayer And meeting', text: 'Mid-week intercessory prayer and breaking of bread.', dateLabel: '2 Weeks Ago', isPinned: false, icon: HandsPraying },
    { id: 6, title: 'Prayer Announcements', text: 'Important updates regarding congregation prayer networks.', dateLabel: '3 Weeks Ago', isPinned: false, icon: MegaphoneSimple },
    { id: 7, title: 'Prayer Group Meeting', text: 'Weekly cell group covenant fellowship assemblies.', dateLabel: '4 Weeks Ago', isPinned: false, icon: HandsPraying },
    { id: 8, title: 'Media Tech', text: 'Sound system, stream operations, and production training workshops.', dateLabel: 'Last Month', isPinned: false, icon: Sparkle, hasBadge: true, badgeText: 'Amen' },
  ];

  // Dynamic search matching utility over title and descriptions
  const filteredNotices = ALL_NOTICES.filter(notice =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Split cleanly between layouts
  const displayLatest = filteredNotices.filter(n => n.isPinned);
  const displayArchive = filteredNotices.filter(n => !n.isPinned);

  return (
    <div className="notices-page-wrapper">
      <style>{`
        .notices-page-wrapper {
          min-height: 100vh;
          background-color: #030a1c; /* Deep landing page navy midnight shadow */
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* ── HEADER STYLES ── */
        .global-site-header {
          width: 100%;
          background: #091124;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-text-group {
          display: flex;
          flex-direction: column;
        }
        .logo-main-title {
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #ffffff;
          margin: 0;
        }
        .logo-sub-title {
          font-size: 12px;
          font-style: italic;
          color: rgba(255, 255, 255, 0.5);
          margin: 2px 0 0 0;
        }
        .global-nav {
          display: flex;
          gap: 24px;
        }
        .nav-item {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-item:hover, .nav-item.active {
          color: #ffffff;
          border-bottom: 1px solid #ffffff;
        }
        .header-home-capsule {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* ── BREADCRUMBS ── */
        .global-breadcrumbs {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 40px 0 40px;
        }
        .breadcrumbs-inner {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
        }
        .crumb-link {
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          text-decoration: none;
        }
        .crumb-separator {
          color: rgba(255, 255, 255, 0.2);
        }
        .crumb-current {
          color: #38bdf8;
          font-weight: 500;
        }

        /* ── INTERACTION UTILITIES ROW ── */
        .notices-main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 30px 40px 80px 40px;
        }
        .notices-action-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        .action-back-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .master-cross-capsule {
          width: 320px;
          height: 44px;
          border: 1px solid rgba(56, 189, 248, 0.25);
          background: rgba(6, 13, 34, 0.4);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
        }
        .search-input-wrapper {
          position: relative;
          width: 280px;
        }
        .search-input-field {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 12px 14px 12px 38px;
          color: white;
          font-size: 13px;
          outline: none;
        }
        .search-icon-inside {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.3);
        }

        /* ── RECTANGLE BROADCAST CARDS ── */
        .notices-section-block {
          margin-bottom: 40px;
        }
        .section-row-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 24px;
        }
        .broadcast-flex-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 24px;
        }
        .broadcast-card {
          background: #0b1329;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }
        .broadcast-card.pinned-red {
          border-color: rgba(220, 38, 38, 0.25);
        }
        .broadcast-meta-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-tag-red {
          color: #ef4444;
          font-size: 11px;
          font-weight: 700;
        }
        .card-tag-blue {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 700;
        }
        .static-date-tag {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 8px;
          border-radius: 4px;
        }
        .broadcast-main-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }
        .broadcast-body-text {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .branded-divider-row {
          width: 100%;
          text-align: center;
          opacity: 0.12;
          letter-spacing: 8px;
          color: #ffffff;
          margin: 32px 0;
        }

        /* ── GRID HOVER ARCHIVES ── */
        .archive-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 20px;
        }
        .archive-item-card {
          background: #0b1329;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .archive-left-block {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .archive-icon-container {
          color: #38bdf8;
          display: flex;
          align-items: center;
          opacity: 0.8;
        }
        .archive-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
        }
        .amen-red-badge {
          background: #dc2626;
          color: white;
          font-weight: 700;
          font-size: 10px;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .bottom-tracker-footer {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          margin-top: 40px;
        }
        .tracker-green-dot {
          width: 5px;
          height: 5px;
          background: #10b981;
          border-radius: 50%;
        }
      `}</style>

      {/* Persistent Cross-Page Layout Components */}
      <Header />
      <Breadcrumbs />

      <main className="notices-main-container">
        
        {/* INTERACTIVE ACTIONS */}
        <div className="notices-action-header">
          <button className="action-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} weight="bold" />
          </button>
          
          <div className="master-cross-capsule">
            <span>†</span>
          </div>

          <div className="search-input-wrapper">
            <MagnifyingGlass size={16} className="search-icon-inside" />
            <input 
              type="text" 
              className="search-input-field" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* CONDITION STATE LIST */}
        {filteredNotices.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
            No announcements found matching "{searchQuery}"
          </div>
        ) : (
          <>
            {/* TIMELINE SEGMENT 1: HIGHEST CHRONOLOGICAL ROW */}
            {displayLatest.length > 0 && (
              <div className="notices-section-block">
                <h2 className="section-row-title">Latest Notices (This Week)</h2>
                <div className="broadcast-flex-row">
                  {displayLatest.map((card) => (
                    <div key={card.id} className={`broadcast-card ${card.isPinned ? 'pinned-red' : ''}`}>
                      <div className="broadcast-meta-line">
                        <span className={card.id === 1 ? 'card-tag-red' : 'card-tag-blue'}>
                          {card.tag}
                        </span>
                        <span className="static-date-tag">{card.dateLabel}</span>
                      </div>
                      <h3 className="broadcast-main-title">{card.title}</h3>
                      <p className="broadcast-body-text">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEPARATOR STRING DIVISION AS PER DESIGN */}
            <div className="branded-divider-row">
              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            </div>

            {/* TIMELINE SEGMENT 2: HISTORICAL RUNTIME GRID */}
            {displayArchive.length > 0 && (
              <div className="notices-section-block">
                <h2 className="section-row-title">Last Month's Archive</h2>
                <div className="archive-cards-grid">
                  {displayArchive.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.id} className="archive-item-card">
                        <div className="archive-left-block">
                          <div className="archive-icon-container">
                            <IconComponent size={20} weight="regular" />
                          </div>
                          <span className="archive-title">{item.title}</span>
                        </div>

                        {item.hasBadge ? (
                          <div className="amen-red-badge">{item.badgeText}</div>
                        ) : (
                          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{item.dateLabel}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

        {/* LIVE BOTTOM RUNTIME TRACKER */}
        <div className="bottom-tracker-footer">
          <span className="tracker-green-dot" />
          <span>Live Feed Updated 2 mins ago</span>
        </div>

      </main>
    </div>
  );
};

export default NoticesScreen;