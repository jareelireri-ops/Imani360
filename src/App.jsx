import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen'; 
import MoreScreen from './MoreScreen'; 
import AdminLogin from './AdminLogin';
import NoticesScreen from './NoticesScreen'; 
import EventsScreen from './EventsScreen';
import PrayersScreen from './PrayerScreen';
import GivingScreen from './GivingScreen';
import JoinGroupScreen from './JoinGroupScreen';
import PreviousSermonsScreen from './PreviousSermonScreen';
import MembersConnectScreen from './MembersConnectScreen';
import SettingScreen from './SettingScreen';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} /> 
        <Route path="/more" element={<MoreScreen />} /> 
        <Route path="/admin" element={<AdminLogin />} /> 
        <Route path="/notices" element={<NoticesScreen />} />
        <Route path="/events" element={<EventsScreen />} />
        <Route path="/prayers" element={<PrayersScreen />} />
        <Route path="/giving" element={<GivingScreen />} />
        <Route path="/join-group" element={<JoinGroupScreen />} />
        <Route path="/previous-sermons" element={<PreviousSermonsScreen />} />
        <Route path="/members-connect" element={<MembersConnectScreen />} />
        <Route path="/settings" element={<SettingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
