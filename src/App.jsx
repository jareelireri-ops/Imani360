import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Context
import { AuthProvider } from './context/AuthContext';

// Home Screens
import HomeScreen from './screens/home/HomeScreen'; 
import MoreScreen from './screens/home/MoreScreen'; 

// Feature Screens
import NoticesScreen from './screens/features/NoticesScreen'; 
import EventsScreen from './screens/features/EventsScreen';
import PrayersScreen from './screens/features/PrayerScreen'; 
import GivingScreen from './screens/features/GivingScreen';
import PreviousSermonsScreen from './screens/features/PreviousSermonScreen'; 
import MembersConnectScreen from './screens/features/MembersConnectScreen';

// Admin Screens
import AdminLogin from './screens/admin/AdminLogin'; 
import SettingScreen from './screens/admin/SettingScreen'; 
import StaffToolsScreen from './screens/admin/StaffToolsScreen';

// Register GSAP plugins globally once at app initialization
gsap.registerPlugin(ScrollTrigger);

// PLACEHOLDERS FOR ADMIN TOOLS
const AdminFinances = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Finance Desk Coming Soon...</div>;
const AdminPrayers = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Prayer Management Coming Soon...</div>;
const AdminAnnouncements = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Announcements Manager Coming Soon...</div>;
const AdminEvents = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Events Manager Coming Soon...</div>;
const AdminSermonUpload = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Sermon Upload Desk Coming Soon...</div>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/more" element={<MoreScreen />} /> 
          <Route path="/admin" element={<AdminLogin />} /> 
          <Route path="/notices" element={<NoticesScreen />} />
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/prayers" element={<PrayersScreen />} />
          <Route path="/giving" element={<GivingScreen />} />
          <Route path="/previous-sermons" element={<PreviousSermonsScreen />} />
          <Route path="/members-connect" element={<MembersConnectScreen />} />
          <Route path="/settings" element={<SettingScreen />} />
          
          {/* STAFF TOOLS MAIN MENU */}
          <Route path="/staff-tools" element={<StaffToolsScreen />} />

          {/* ADMIN ACTION SUB-ROUTES */}
          <Route path="/admin/finances" element={<AdminFinances />} />
          <Route path="/admin/prayers" element={<AdminPrayers />} />
          <Route path="/admin/announcements" element={<AdminAnnouncements />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/sermon-upload" element={<AdminSermonUpload />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;