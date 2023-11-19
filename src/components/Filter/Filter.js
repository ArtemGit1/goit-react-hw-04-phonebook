import React from 'react';

const Filter = ({ filter, setFilter }) => (
  <label>
    Filter by name:
    <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
  </label>
);

export default Filter;
