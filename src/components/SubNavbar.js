import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubNavbar = ({ categories, baseUrl = '' }) => {
  const location = useLocation();

  return (
    <div className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
          {categories.map((category) => {
            const fullPath = `${baseUrl}/${category.path}`;
            return (
              <Link
                key={category.path}
                to={fullPath}
                className={`whitespace-nowrap px-3 py-2 rounded-full transition-colors duration-200 ${
                  location.pathname.includes(category.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
