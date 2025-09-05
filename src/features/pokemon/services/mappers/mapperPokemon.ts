
  import type { Pokemon } from '../models/pokemon';
  import type { Locale } from '../helpers/helpers';
  import { pickName } from '../helpers/helpers';
  import type { TyradexPokemon } from '../pokemonApi';
  
  export const toPokemon = (raw: TyradexPokemon, loc: Locale = 'fr'): Pokemon => ({
    id: raw.pokedex_id,
    name: pickName(raw.name, loc),
    image: raw.sprites?.regular ?? '',
    types: raw.types.map((t: any) => String(t.name)),
  });