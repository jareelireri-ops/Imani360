import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const StaffToolsScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Security Check
  if (!user) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white font-black">UNAUTHORIZED ACCESS</div>;
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Identity Header */}
      <div className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-white text-3xl font-black tracking-tighter uppercase">Staff Operations</h1>
        <div className="h-1 w-16 bg-grey-400 mx-auto mt-2 rounded-full opacity-50"></div>
        <p className="text-grey-300 text-sm mt-2 tracking-wide">
          Personnel: {user.name} | Access Level: {user.role}
        </p>
      </div>

      {/* Grid of Task Cards */}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* CHECK FINANCES - Restricted to Super/Admin */}
        {(user.role === 'SUPER' || user.role === 'ADMIN') && (
          <div 
            onClick={() => navigate('/admin/finances')}
            className="group bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl cursor-pointer hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-white font-black text-lg leading-tight">CHECK<br/>FINANCES</h3>
            <p className="text-indigo-200/40 text-[9px] font-bold tracking-widest mt-2">PLEDGES & TITHES</p>
          </div>
        )}

        {/* CHECK PRAYERS */}
        <div 
          onClick={() => navigate('/admin/prayers')}
          className="group bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl cursor-pointer hover:bg-white/20 transition-all duration-300"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🙏</div>
          <h3 className="text-white font-black text-lg leading-tight">CHECK<br/>PRAYERS</h3>
          <p className="text-indigo-200/40 text-[9px] font-bold tracking-widest mt-2">MINISTRY RESPONSES</p>
        </div>

        {/* CHECK ANNOUNCEMENTS */}
        <div 
          onClick={() => navigate('/admin/announcements')}
          className="group bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl cursor-pointer hover:bg-white/20 transition-all duration-300"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📢</div>
          <h3 className="text-white font-black text-lg leading-tight">CHECK<br/>ANNOUNCEMENTS</h3>
          <p className="text-indigo-200/40 text-[9px] font-bold tracking-widest mt-2">BULLETIN UPDATES</p>
        </div>

        {/* CHECK EVENTS */}
        <div 
          onClick={() => navigate('/admin/events')}
          className="group bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl cursor-pointer hover:bg-white/20 transition-all duration-300"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📅</div>
          <h3 className="text-white font-black text-lg leading-tight">CHECK<br/>EVENTS</h3>
          <p className="text-indigo-200/40 text-[9px] font-bold tracking-widest mt-2">CALENDAR CONTROL</p>
        </div>

        {/* UPLOAD SERMON CARD */}
        <div 
          onClick={() => navigate('/admin/sermon-upload')}
          className="sm:col-span-2 group bg-gradient-to-br from-indigo-600/40 to-purple-700/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-black text-xl leading-tight">UPLOAD LIVE OR<br/>PREVIOUS SERMONS</h3>
              <p className="text-indigo-200/60 text-[10px] font-bold tracking-[0.2em] mt-2">VIDEO REPOSITORY MANAGEMENT</p>
            </div>
            <div className="text-5xl group-hover:rotate-12 transition-transform duration-500">🎬</div>
          </div>
        </div>

      </div>

      {/* Navigation Footer */}
      <button 
        onClick={() => navigate('/more')}
        className="mt-12 text-white/30 hover:text-white text-[10px] font-black tracking-[0.4em] uppercase transition-colors"
      >
        ← BACK TO MENU
      </button>
    </div>
  );
};

export default StaffToolsScreen;