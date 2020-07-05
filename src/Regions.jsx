import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={onClick} id={region.id}>
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
