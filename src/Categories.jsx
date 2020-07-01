import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <div>
      {
        categories.map((category) => (
          <button type="button" key={category.id} onClick={onClick}>
            { category.name }
          </button>
        ))
      }
    </div>
  );
}
