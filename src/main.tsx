import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Loading from './pages/Loading.tsx';
import Booking from './pages/Booking.tsx';
import Confirmation from './pages/Confirmation.tsx';
import Nav from './pages/Nav.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  </StrictMode>,
)
