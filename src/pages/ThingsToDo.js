import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SubNavbar from '../components/SubNavbar';
import Adventures from '../components/activities/Adventures';
import Cultures from '../components/activities/Cultures';
import Wellness from '../components/activities/Wellness';

const ThingsToDo = () => {
  const categories = [
    { name: 'Adventures', path: 'adventures' },
    { name: 'Cultures', path: 'cultures' },
    { name: 'Wellness', path: 'wellness' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-white mb-4">Things to Do</h1>
          <p className="text-white text-lg">
            Experience the best activities and adventures Nepal has to offer
          </p>
        </div>
      </div>

      <SubNavbar categories={categories} baseUrl="/things-to-do" />

      <div className="container-custom py-8">
        <Routes>
          <Route path="/" element={<Navigate to="adventures" replace />} />
          <Route path="adventures/*" element={<Adventures />} />
          <Route path="cultures/*" element={<Cultures />} />
          <Route path="wellness/*" element={<Wellness />} />
        </Routes>
      </div>
    </div>
  );
};

export default ThingsToDo;
