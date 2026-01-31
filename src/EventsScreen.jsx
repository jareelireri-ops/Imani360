import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventsScreen = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null); // null means no date selected
  const [viewedMonth, setViewedMonth] = useState(new Date()); // Track the calendar's viewed month

  // Dummy event data (expand with real data/API; assume posters are URLs from admin uploads)
  const events = [
    { id: 1, title: 'Sunday Worship Service', date: '2023-10-15', time: '10:00 AM', location: 'Main Sanctuary', description: 'Join us for praise and worship.', category: 'Worship', icon: '🙏', poster: 'https://example.com/worship-poster.jpg' },
    { id: 2, title: 'Community Outreach', date: '2023-10-20', time: '2:00 PM', location: 'Downtown Park', description: 'Serving the community with love.', category: 'Outreach', icon: '🤝', poster: null },
    { id: 3, title: 'Bible Study Group', date: '2023-10-25', time: '7:00 PM', location: 'Fellowship Hall', description: 'Dive deep into scripture.', category: 'Study', icon: '📖', poster: 'https://example.com/bible-study-poster.jpg' },
    // Add more events
  ];

  // Get today's date for highlighting
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];

  // Filter events for the viewed month (upcoming only, from today onward)
  const viewedMonthEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today && 
           eventDate.getMonth() === viewedMonth.getMonth() && 
           eventDate.getFullYear() === viewedMonth.getFullYear();
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  // Filter events for selected date
  const selectedEvents = selectedDate
    ? events.filter(event => event.date === selectedDate.toISOString().split('T')[0])
    : [];

  // Function to check if a date has events
  const hasEvent = (date) => {
    return events.some(event => event.date === date.toISOString().split('T')[0]);
  };

  // Handle date click: select if not selected, deselect if already selected
  /*const handleDateClick = (date) => {
    if (selectedDate && selectedDate.toDateString() === date.toDateString()) {
      setSelectedDate(null); // Deselect
    } else {
      setSelectedDate(date); // Select
    }
  };*/
  const handleDateClick = (date) => {
  if (date < today) return; // ignore past dates
  setSelectedDate(
    selectedDate && selectedDate.toDateString() === date.toDateString() ? null : date
  );
};



  // Handle calendar view change to update viewed month
  const handleViewChange = ({ activeStartDate }) => {
    setViewedMonth(activeStartDate);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        fontFamily: "'Great Vibes', cursive",
      }}
    >
      {/* Header Container - Standardized */}
      <div className="w-full max-w-2xl mb-8">
        <div
          className="w-full relative overflow-hidden"
          style={{
            boxSizing: 'border-box',
            height: '80px',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div
            style={{
              fontFamily: "'Crimson Text', serif",
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 'clamp(18px, 4vw, 24px)',
              lineHeight: '1.3',
              color: '#251d1d',
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

      {/* Metallic Cross - Standardized */}
      <div className="mb-12 relative" style={{ textAlign: 'center' }}>
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
        <style>{`
          @keyframes glow {
            from { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1); }
            to { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1.1); }
          }
        `}</style>
      </div>

      {/* Responsive Container: Stack on Mobile, Side-by-Side on Larger Screens */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Calendar Section - Top on Mobile, Left on Larger */}
        <div className="w-full md:w-1/3 flex flex-col items-center"> {/* Full width on mobile, 1/3 on larger */}
          <Calendar
            onClickDay={handleDateClick}
            onActiveStartDateChange={handleViewChange}
            value={selectedDate}
            activeStartDate={viewedMonth}
            tileClassName={({ date }) => hasEvent(date) ? 'event-day' : null}
            className="react-calendar mb-4"
          />
          {/* Buttons Below Calendar */}
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => setViewedMonth(new Date())} 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 shadow-lg font-bold transition-all duration-300"
              style={{ 
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                animation: 'glow 2s ease-in-out infinite alternate' // Unique glow animation
              }}
            >
              Today
            </button>
            {selectedDate && (
              <button 
                onClick={() => setSelectedDate(null)} 
                className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-800 shadow-lg font-bold transition-all duration-300"
                style={{ 
                  boxShadow: '0 0 15px rgba(147, 51, 234, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.1)' // Unique purple glow
                }}
              >
                Show All for {viewedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </button>
            )}
          </div>
          <style>{`
            .react-calendar { 
              background: linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%);
              border-radius: 12px;
              color: white;
            }
            .event-day { 
              background: rgba(255, 215, 0, 0.3) !important; 
              border-radius: 50%; 
            }
            @keyframes glow {
              from { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
              to { box-shadow: 0 0 30px rgba(255, 215, 0, 1); }
            }
          `}</style>
        </div>

        {/* Events List - Bottom on Mobile, Right on Larger */}
        <div className="w-full md:w-2/3"> {/* Full width on mobile, 2/3 on larger */}
          <h2 className="text-white text-xl font-bold mb-4">
            {selectedDate ? `Events on ${selectedDate.toDateString()}` : `Upcoming Events - ${viewedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}`}
          </h2>
          {(selectedDate ? selectedEvents : viewedMonthEvents).length > 0 ? (
            <div className="space-y-4">
              {(selectedDate ? selectedEvents : viewedMonthEvents).map(event => (
                <div 
                  key={event.id} 
                  className={`bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:scale-105 transition ${event.date === todayString ? 'border-2 border-yellow-400 shadow-yellow-400/50' : ''}`}
                  style={event.date === todayString ? { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' } : {}}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{event.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{event.title}</h3>
                      {!selectedDate && <p className="text-white/80 text-sm">{event.date}</p>} {/* Show date only in month view */}
                    </div>
                  </div>
                  {selectedDate && ( // Show details only when date is selected
                    <>
                      <p className="text-white/70 text-sm">Time: {event.time}</p>
                      <p className="text-white/70 text-sm">Location: {event.location}</p>
                      <p className="text-white/70 text-sm mb-2">{event.description}</p>
                      {event.poster && (
                        <img 
                          src={event.poster} 
                          alt="Event Poster" 
                          className="w-full h-32 object-cover rounded mb-2 cursor-pointer hover:opacity-80" 
                          onClick={() => window.open(event.poster, '_blank')}
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p 
            className="text-center text-xl"
            style={{
              color: '#fd8aea', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: '500',
               }}>
  {selectedDate
    ? 'No events on this date.'
    : 'No upcoming events this month—stay tuned! ✝️'}

            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsScreen;