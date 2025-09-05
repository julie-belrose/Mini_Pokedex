// types/pokemon-api.ts (brut API)
export interface TyradexPokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: LocalizedName;
  sprites: RawSprites;
  types: RawType[];
  talents: RawTalent[];
  stats: RawStats;
  resistances: RawResistance[];
  evolution: null;
  height: string;
  weight: string;
  egg_groups: null;
  sexe: null;
  catch_rate: number;
  level_100: number;
  formes: null;
}

export interface LocalizedName {
  fr: string;
  en: string;
  jp: string;
}

export interface RawSprites {
  regular: string;
  shiny: string | null;
  gmax: string | null;
}

export interface RawType {
  name: string;
  image: string;
}

export interface RawTalent {
  name: string;                
  tc: boolean;
}

export interface RawStats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface RawResistance {
  name: string;
  multiplier: number;
}