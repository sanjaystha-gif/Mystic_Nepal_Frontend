import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SubNavbar from '../components/SubNavbar';
import Provinces from '../components/places/Provinces';
import WorldHeritage from '../components/places/WorldHeritage';
import ProtectedAreas from '../components/places/ProtectedAreas';
import EightThousanders from '../components/places/EightThousanders';
import PilgrimageSites from '../components/places/PilgrimageSites';

const PlaceToGo = () => {
  const categories = [
    { name: 'Provinces', path: '/places/provinces' },
    { name: 'World Heritage', path: '/places/world-heritage' },
    { name: 'Protected Areas', path: '/places/protected-areas' },
    { name: 'Eight Thousanders', path: '/places/eight-thousanders' },
    { name: 'Pilgrimage Sites', path: '/places/pilgrimage-sites' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-white mb-4">Places to Go</h1>
          <p className="text-white text-lg">
            Discover the diverse landscapes and cultural heritage of Nepal
          </p>
        </div>
      </div>

      <SubNavbar categories={categories} />

      <div className="container-custom py-8">
        <Routes>
          <Route path="/" element={<Navigate to="/places/provinces" replace />} />
          <Route path="/provinces" element={<Provinces />} />
          <Route path="/world-heritage" element={<WorldHeritage />} />
          <Route path="/protected-areas" element={<ProtectedAreas />} />
          <Route path="/eight-thousanders" element={<EightThousanders />} />
          <Route path="/pilgrimage-sites" element={<PilgrimageSites />} />
        </Routes>
      </div>
    </div>
  );
};

export default PlaceToGo;
