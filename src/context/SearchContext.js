import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const search = async (query) => {
    setLoading(true);
    setSearchQuery(query);
    setError(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/search`, {
        params: { query }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Search failed:', error);
      setError('Failed to fetch search results. Please try again.');
      setSearchResults([]);
    }

    setLoading(false);
  };

  const value = {
    searchResults,
    searchQuery,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    search
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext;
