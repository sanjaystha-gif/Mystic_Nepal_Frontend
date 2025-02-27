import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlacesToGo from './pages/PlacesToGo';
import ThingsToDo from './pages/ThingsToDo';
import Events from './pages/Events';
import ContactForm from './components/contact/ContactForm';
import Login from './pages/Login';
import Signup from './components/auth/Signup';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import SearchResults from './pages/SearchResults';
import PlaceDetailPage from './components/places/PlaceDetailPage';
import EventDetailPage from './components/events/EventDetailPage';
import DestinationDetail from './pages/DestinationDetail';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/places-to-go/*" element={<PlacesToGo />} />
                <Route path="/things-to-do/*" element={<ThingsToDo />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/place/:id" element={<PlaceDetailPage />} />
                <Route path="/event/:id" element={<EventDetailPage />} />
                <Route path="/destination/:id" element={<DestinationDetail />} />
                
                {/* Protected Routes */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/bookings"
                  element={
                    <ProtectedRoute>
                      <Bookings />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
