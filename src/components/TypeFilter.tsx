import React from 'react';
import { PokemonType } from '../types/pokemon';

interface TypeFilterProps {
  selectedType: string | null;
  onTypeChange: (type: string | null) => void;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="type-filter">
      <select
        value={selectedType || ''}
        onChange={(e) => onTypeChange(e.target.value || null)}
        className="type-select"
      >
        <option value="">All Types</option>
        {Object.values(PokemonType).map((type) => (
          <option key={(type as PokemonType)} value={(type as string)}>
            {(type as PokemonType)}
          </option>
        ))}
      </select>
    </div>
  );
};
