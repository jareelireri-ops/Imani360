import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

const HomeScreen = () => {
  const navigate = useNavigate(); // Add this hook

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        fontFamily: "'Montserrat', sans-serif", // Modern, professional font
      }}
    >
      {/* Header Container */}
      <div className="w-full max-w-2xl mb-8">
        <div
          className="w-full relative overflow-hidden"
          style={{
            boxSizing: 'border-box',
            height: '80px',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)', // Professional blue gradient
            border: '2px solid rgba(119, 47, 47, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
          }}
        >
          {/* Subtle animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div
            style={{
              fontFamily: "'Crimson Text', serif",
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 'clamp(18px, 4vw, 24px)',
              lineHeight: '1.3',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '100%',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              zIndex: 1,
              position: 'relative',
            }}
          >
            CHRISTIAN CHURCH INTERNATIONAL LIGHT SANCTUARY
          </div>
        </div>
      </div>

      {/* Metallic Cross - Enhanced Glow */}
      <div className="mb-12 relative">
        <div
          style={{
            fontSize: 'clamp(36px, 8vw, 54px)',
            color: '#ffffff',
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 215, 0, 0.6),
              0 0 60px rgba(255, 215, 0, 0.4),
              0 0 80px rgba(255, 215, 0, 0.2)
            `,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
            lineHeight: '1',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          ✝
        </div>
        {/* CSS Animation for glow */}
        <style>{`
          @keyframes glow {
            from { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1); }
            to { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1.1); }
          }
        `}</style>
      </div>

      {/* Live Buttons - Professional Gradients and Effects */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-16">
        <div className="flex flex-row justify-center items-center relative">
          {/* WATCH LIVE Button */}
          <div
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-1 z-10"
            style={{
              width: 'clamp(110px, 20vw, 140px)',
              height: 'clamp(110px, 20vw, 140px)',
             background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)', // Rich red gradient
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4), 0_0_20px_ rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.5)',
              borderRadius: '50%',
              marginRight: '60px',
            }}
          >
            <span className="text-white text-3xl md:text-4xl mb-2 drop-shadow-lg">📺</span>
            <span 
              className="text-white font-black text-center text-sm drop-shadow-md"
              style={{ fontWeight: 'bolder' }} // Added to match navigation cards' boldness
            >
              WATCH LIVE
            </span>
          </div>

          {/* Glowing Vertical Line - Enhanced */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              width: '6px',
              height: 'clamp(110px, 20vw, 140px)',
              background: 'bg-gradient-to-br from-red-600 to-red-800shadow-xlborder border-white/30rounded-full',

              boxShadow: `0 12px 24px rgba(0, 0, 0, 0.4),0_0_20px_ rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.5) `,
              borderRadius: '50px',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          />

          {/* LISTEN LIVE Button */}
          <div
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-1 z-10"
            style={{
              width: 'clamp(110px, 20vw, 140px)',
              height: 'clamp(110px, 20vw, 140px)',
             background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)', 
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 0 20px rgba(220, 38, 38, 0.5)',
              borderRadius: '50%',
              marginLeft: '60px',
            }}
          >
            <span className="text-white text-3xl md:text-4xl mb-2 drop-shadow-lg">🔈</span>
            <span 
              className="text-white font-black text-center text-sm drop-shadow-md"
              style={{ fontWeight: 'bolder' }} // Added to match navigation cards' boldness
            >
              LISTEN LIVE
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Cards - RESPONSIVE 2x2 Grid for ALL devices */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-16 px-4">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-full justify-items-center">
          {[
            { icon: '📢', text: 'CHURCH NOTICES<br />(ANNOUNCEMENTS)' },
            { icon: '📅', text: 'EVENTS /<br />CALENDAR' },
            { icon: '🙏', text: 'PRAYERS &<br />CONNECT' },
            { icon: '💰', text: 'GIVING /<br />TITHE' },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                width: 'clamp(100px, 22vw, 150px)', // Increased min width slightly for better fit
                height: 'clamp(100px, 22vw, 150px)', // Increased min height for text buffer
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', // Professional cyan gradient
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: 'clamp(8px, 2vw, 12px)',
              }}
               onClick={() => {
  if (card.text.includes('CHURCH NOTICES')) navigate('/notices');
  if (card.text.includes('EVENTS')) navigate('/events');
  if (card.text.includes('PRAYERS')) navigate('/prayers');
  if (card.text.includes('GIVING')) navigate('/giving');
              }}
            >
              <div className="mb-2 text-[clamp(22px, 6vw, 28px)] group-hover:animate-bounce">{card.icon}</div>
              <div 
                className="text-center font-black text-white leading-[1.2] drop-shadow-md px-1"
                style={{
                  fontSize: 'clamp(10px, 2.5vw, 16px)', // Adjusted for better scaling: larger on laptops, still readable on phones
                  fontWeight: 'bolder', // Added to make text even bolder
                  overflow: 'hidden', // Prevents overflow
                  textOverflow: 'ellipsis', // Adds ellipsis if needed (rare with adjustments)
                  whiteSpace: 'pre-line', // Ensures <br /> breaks work
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: card.text }} />
              </div>
            </div>
          ))}
        </div>

        {/* MORE Button - Professional and Interactive */}
        <div className="flex justify-center mt-8">
          <div
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 group"
            style={{
              width: 'clamp(70px, 15vw, 80px)',
              height: 'clamp(70px, 15vw, 80px)',
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', // Matching gradient
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 0 15px rgba(6, 182, 212, 0.4)',
              borderRadius: '20px',
              padding: 'clamp(8px, 2vw, 10px)',
            }}
            onClick={() => navigate('/more')} // Add this onClick to navigate
          >
            <div className="mb-1 text-[clamp(20px, 5vw, 24px)] group-hover:animate-spin">+</div>
            <div className="text-center font-black text-white text-[clamp(9px, 2vw, 11px)] drop-shadow-md">MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;