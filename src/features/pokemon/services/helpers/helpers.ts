import type { LocalizedName } from '../../types/pokemonApi';
import type { Pokemon } from '../../types/models/pokemon';
import type { TyradexPokemon, RawType } from '../../types/pokemonApi';

export type Locale = 'fr' | 'en' | 'jp';

export const pickName = (name: LocalizedName, locale: Locale = 'fr'): string => {
  if (!name) return '';
  if (typeof name === 'string') return name;
  return name[locale] ?? name.fr ?? name.en ?? String(Object.values(name)[0] ?? '');
};

export const normalizePokemon = (raw: TyradexPokemon, locale: Locale = 'fr'): Pokemon => {
    return {
        id: raw.pokedex_id,
        name: pickName(raw.name, locale),
        image: raw.sprites?.regular ?? '',
        types: raw.types.map((t: RawType) => String(t.name)),
    };
}