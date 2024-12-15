import React from 'react';

const FilterButtons = ({ currentFilter, setFilter }) => {
  const filters = ['all', 'completed', 'incomplete'];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={filter === currentFilter ? 'active' : ''}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
