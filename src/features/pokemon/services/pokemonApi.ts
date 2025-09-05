// helpers/pickName.ts
import type { TyradexPokemon } from '../types/pokemonApi';
import type { Pokemon } from '../types/models/pokemon';
import { normalizePokemon } from './helpers/helpers';
export type Locale = 'fr' | 'en' | 'jp';

const BASE_URL = 'https://tyradex.app/api/v1';

export async function fetchPokemonList(limit = 20, locale: Locale = 'fr'): Promise<Pokemon[]> {
    const res = await fetch(`${BASE_URL}/pokemon`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as TyradexPokemon[];
    return data.slice(0, limit).map(p => normalizePokemon(p, locale));
}
