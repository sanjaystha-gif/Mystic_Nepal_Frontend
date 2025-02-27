import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import WorldHeritage from '../components/places/WorldHeritage';
import ProtectedAreas from '../components/places/ProtectedAreas';
import EightThousanders from '../components/places/EightThousanders';
import PilgrimageSites from '../components/places/PilgrimageSites';
import Provinces from '../components/places/Provinces';

const PlacesToGo = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('provinces');

  const tabs = [
    { id: 'provinces', label: 'Provinces', component: Provinces },
    { id: 'heritage', label: 'World Heritage Sites', component: WorldHeritage },
    { id: 'protected', label: 'Protected Areas', component: ProtectedAreas },
    { id: 'mountains', label: 'Eight Thousanders', component: EightThousanders },
    { id: 'pilgrimage', label: 'Pilgrimage Sites', component: PilgrimageSites }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Places to Go</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover the diverse destinations Nepal has to offer
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(tab => (
            <Link
              key={tab.id}
              to={`/places-to-go/${tab.id}`}
              className={`${
                location.pathname.includes(tab.id)
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Provinces />} />
          <Route path="/provinces" element={<Provinces />} />
          <Route path="/heritage" element={<WorldHeritage />} />
          <Route path="/protected" element={<ProtectedAreas />} />
          <Route path="/mountains" element={<EightThousanders />} />
          <Route path="/pilgrimage" element={<PilgrimageSites />} />
        </Routes>
      </div>
    </div>
  );
};

export default PlacesToGo;
