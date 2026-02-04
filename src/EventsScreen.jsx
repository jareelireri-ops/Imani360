import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// EventsScreen Component
const EventsScreen = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewedMonth, setViewedMonth] = useState(new Date());

  // Sample event data also with some ai generated posters as urls for testing
  // (but posterbrings 404)
  const events = [
    { 
      id: 1, 
      title: "Men's Conference", 
      date: '2026-02-04', // Today
      time: '5:30 PM', 
      location: 'Church', 
      description: 'Empowering the men of the sanctuary in word and fellowship.', 
      category: 'Conference', 
      icon: '👨‍💼', 
      poster: 'https://images.unsplash.com/photo-1475721027187-402ad2989a38?auto=format&fit=crop&w=800' 
    },
    { 
      id: 2, 
      title: 'Music Extravaganza', 
      date: '2026-02-06', 
      time: '2:00 PM', 
      location: 'UNICAS Garden', 
      description: 'A massive celebration of praise and worship in the garden.', 
      category: 'Worship', 
      icon: '🎸', 
      poster: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800' 
    },
    { 
      id: 3, 
      title: 'Senior Youth Day', 
      date: '2026-02-08', 
      time: '10:00 AM', 
      location: 'Church', 
      description: 'Focusing on the next generation of leaders.', 
      category: 'Youth', 
      icon: '🙌', 
      poster: 'https://images.unsplash.com/photo-1523580494863-6f30312248fd?auto=format&fit=crop&w=800' 
    },
    { 
      id: 4, 
      title: 'Junior Youth Day', 
      date: '2026-02-14', 
      time: '9:00 AM', 
      location: 'UNICAS Garden', 
      description: 'A fun-filled day of activities for our younger stars.', 
      category: 'Youth', 
      icon: '⚽', 
      poster: 'https://images.unsplash.com/photo-1472653376319-380a7ece254a?auto=format&fit=crop&w=800' 
    }
  ];

  // Filter events for the viewed month and sort them
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const todayStr = today.toLocaleDateString('en-CA');

  // Events in the currently viewed month
  const viewedMonthEvents = events.filter(event => {
    const eDate = new Date(event.date);
    return eDate >= today && 
           eDate.getMonth() === viewedMonth.getMonth() && 
           eDate.getFullYear() === viewedMonth.getFullYear();
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  // Events on the selected date,completed bymy copilot
  const selectedEvents = selectedDate 
    ? events.filter(e => e.date === selectedDate.toLocaleDateString('en-CA')) 
    : [];

    // Handle date click
  const handleDateClick = (date) => {
    if (date < today) return; 
    setSelectedDate(selectedDate?.toDateString() === date.toDateString() ? null : date);
  };

  // Main render,
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 pb-20 px-4"
      style={{ background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontFamily: "'Montserrat', sans-serif" }}>
      
      <div className="w-full max-w-2xl mb-8">
        <div className="w-full relative overflow-hidden flex items-center justify-center h-20 rounded-xl border-2 border-white/20 shadow-2xl bg-gradient-to-r from-blue-900 via-blue-500 to-blue-800 px-5">
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
          <h1 className="relative z-10 text-white font-bold text-center leading-tight uppercase" style={{ fontFamily: "'Crimson Text', serif", fontSize: 'clamp(16px, 4vw, 22px)' }}>
            CHRISTIAN CHURCH INTERNATIONAL LIGHT SANCTUARY
          </h1>
        </div>
      </div>

      {/* Navigation Buttons - Standardized */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#06b6d4', // Cyan
            color: 'white',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0891b2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#06b6d4'}
          title="Back"
        >
          ←
        </button>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: 'black', // Black
            color: 'white',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
          title="Home"
        >
          🏠
        </button>
      </div>

      <div className="mb-10 text-white text-5xl drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-pulse">✝</div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <Calendar
            onClickDay={handleDateClick}
            onActiveStartDateChange={({ activeStartDate }) => setViewedMonth(activeStartDate)}
            value={selectedDate}
            tileClassName={({ date }) => events.some(e => e.date === date.toLocaleDateString('en-CA')) ? 'event-day' : null}
            className="rounded-xl border-none shadow-2xl overflow-hidden"
          />
          <div className="flex flex-col gap-3 mt-6 w-full px-4">
            <button onClick={() => { setViewedMonth(new Date()); setSelectedDate(null); }} className="bg-yellow-500 text-white py-2 rounded-lg font-bold shadow-lg hover:bg-yellow-600 active:scale-95 transition-all">Go to Today</button>
            {selectedDate && <button onClick={() => setSelectedDate(null)} className="bg-purple-600 text-white py-2 rounded-lg font-bold shadow-lg active:scale-95 transition-all">Clear Selection</button>}
          </div>
          
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-white text-xl font-bold mb-6 border-b border-white/20 pb-2">
            {selectedDate ? `Events: ${selectedDate.toDateString()}` : `Upcoming: ${viewedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}`}
          </h2>
          
          <div className="space-y-5">
            {(selectedDate ? selectedEvents : viewedMonthEvents).length > 0 ? (
              (selectedDate ? selectedEvents : viewedMonthEvents).map(event => (
                <div key={event.id} className={`bg-white/10 backdrop-blur-md p-5 rounded-xl border-l-4 transition-all hover:translate-x-1 ${event.date === todayStr ? 'border-yellow-400 bg-white/20 shadow-[0_0_15px_rgba(255,215,0,0.3)]' : 'border-cyan-400'}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{event.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg">{event.title}</h3>
                      {!selectedDate && <p className="text-white/60 text-xs italic">{event.date}</p>}
                    </div>
                  </div>
                  
                  {selectedDate && (
                    <div className="text-white/80 text-sm space-y-2 animate-fadeIn">
                      <p className="flex items-center gap-2"><span>🕒</span> {event.time} | <span>📍</span> {event.location}</p>
                      <p className="leading-relaxed">{event.description}</p>
                      {event.poster && <img src={event.poster} alt="Poster" className="w-full h-40 object-cover rounded-lg mt-3 cursor-zoom-in hover:brightness-110 transition-all" onClick={() => window.open(event.poster, '_blank')}/>}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-pink-200 italic font-serif text-lg drop-shadow-md">No events found for this period. Stay tuned! ✝️</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .react-calendar { background: linear-gradient(135deg, #06b6d4 0%, #0e7490 100%) !important; border: none !important; color: white !important; width: 100% !important; border-radius: 12px; }
        .react-calendar__navigation button { color: white !important; font-size: 1.2rem; }
        .react-calendar__month-view__weekdays { font-weight: bold; text-transform: uppercase; color: rgba(255,255,255,0.8); }
        .react-calendar__tile { color: white !important; height: 45px !important; }
        .react-calendar__tile:enabled:hover { background-color: rgba(255,255,255,0.2) !important; border-radius: 8px; }
        .react-calendar__tile--now { background: #1e3a8a !important; border-radius: 8px; }
        .react-calendar__tile--active { background: white !important; color: #0891b2 !important; border-radius: 8px; font-weight: bold; }
        .event-day { position: relative; font-weight: bold; }
        .event-day::after { content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%); width: 6px; height: 6px; background: gold; border-radius: 50%; box-shadow: 0 0 5px gold; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default EventsScreen;