import React from 'react';
import RegistrationForm from './Component/RegistrationForm/RegistrationForm';
import BookingDetail from './Component/BookingDetail/BookingDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/bookingDetail" element={<BookingDetail />} />
      </Routes>
    </Router>
    
  );
}
export default App;
