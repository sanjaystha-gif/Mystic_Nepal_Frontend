import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { FaMapMarkerAlt, FaCalendarAlt, FaHiking } from 'react-icons/fa';

const SearchResults = () => {
  const { searchResults, searchQuery, loading, activeFilter, setActiveFilter } = useSearch();

  const filters = [
    { id: 'all', label: 'All Results' },
    { id: 'destination', label: 'Places to Go' },
    { id: 'activity', label: 'Things to Do' },
    { id: 'event', label: 'Events' }
  ];

  const filteredResults = activeFilter === 'all'
    ? searchResults
    : searchResults.filter(result => result.type === activeFilter);

  const getIcon = (type) => {
    switch (type) {
      case 'destination':
        return <FaMapMarkerAlt className="text-blue-500" />;
      case 'activity':
        return <FaHiking className="text-green-500" />;
      case 'event':
        return <FaCalendarAlt className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Search Results for "{searchQuery}"
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Found {filteredResults.length} results
        </p>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredResults.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No results found</h3>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResults.map(result => (
            <Link
              key={result.id}
              to={`/${result.type}s/${result.id}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={result.image}
                  alt={result.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  {getIcon(result.type)}
                  <span className="text-sm font-medium text-gray-500">
                    {result.category}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {result.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
