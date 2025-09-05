export interface PokemonsAPI {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  description?: string;
  height?: number;
  weight?: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  abilities?: string[];
  category?: string;
}
