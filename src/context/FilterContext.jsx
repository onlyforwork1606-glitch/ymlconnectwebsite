import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    productType: [],
    sizes: [],
    brands: [],
    colors: [],
    gender: [],
    searchQuery: "",
  });

  const [priceRange, setPriceRange] = useState([50, 5000]);

  const toggleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const setSearchQuery = (query) => {
      setFilters(prev => ({...prev, searchQuery: query}));
  }

  const resetFilters = () => {
      setFilters({
        productType: [],
        sizes: [],
        brands: [],
        colors: [],
        gender: [],
        searchQuery: "",
      });
      setPriceRange([50, 5000]);
  }

  const value = {
    filters,
    setFilters,
    priceRange,
    setPriceRange,
    toggleFilter,
    setSearchQuery,
    resetFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
