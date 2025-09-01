import React from 'react';
import type { Pokemon } from '../types/pokemon';
import type { PokemonType } from '../types/pokemonType.ts';
import { EmptyState } from './EmptyState';

interface ListProps {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

export const List: React.FC<ListProps> = ({ pokemons, onPokemonClick }) => {
  if (pokemons.length === 0) {
    return <EmptyState title="No results"/>;
  }

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li 
          key={pokemon.name} 
          className="pokemon-list-item"
          onClick={() => onPokemonClick(pokemon)}
        >
          <h4>{pokemon.name}</h4>
          <ul className="pokemon-types-list">
            {pokemon.type.map((typeValue : PokemonType) => (
              <li key={typeValue} className={`type-badge type-${typeValue.toLowerCase()}`}>
                {typeValue}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
