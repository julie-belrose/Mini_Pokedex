import type { PokemonType } from './pokemonType.ts';

export interface Pokemon {
  name: string;
  type: PokemonType[];
}
