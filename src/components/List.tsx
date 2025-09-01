import React from 'react';
import type { Pokemon } from '../types/pokemon';
import { PokemonType } from '../types/pokemonType';
import { EmptyState } from './EmptyState';

interface ListProps {
  pokemons: Pokemon[];
    onPokemonClick: (pokemon: Pokemon) => void;
}

export const List: React.FC<ListProps> = ({ pokemons, onPokemonClick }) => {
  if (pokemons.length === 0) {
      return <EmptyState title="No results" />;
  }

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
          <li
              key={pokemon.name}
              className="pokemon-list-item"
              onClick={() => onPokemonClick(pokemon)}>
          <h4>{pokemon.name}</h4>
              <span className={`type-badge type-${(pokemon.type as PokemonType).toLowerCase()}`}>
                  {pokemon.type}
              </span>
          </li>
      ))}
    </ul>
  );
};
