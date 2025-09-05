import { useMemo, useState } from 'react';
import { Search } from './components/Search';
import { List } from './components/List';
import { SelectFilter } from './components/Filter';
import { pokemons } from './data/pokemon';
import { useLocalStorageState } from './hook/useLocalStorageState';
import { POKEMON_TYPES, type PokemonType } from './types/pokemonType';
import type { Pokemon } from './types/pokemon';

function App() {
  const [searchTerm, setSearchTerm] = useLocalStorageState('searchTerm', 'Pikachu');
  const [selectedType, setSelectedType] = useState<PokemonType | null>(null);

  //Use useMemo to avoid re-filtering the list on every render when the filters change
  const filteredPokemons = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return pokemons.filter((pokemon: Pokemon) => {
      const matchesName = query === '' ? true : pokemon.name.toLowerCase().includes(query);
      const matchesType = selectedType ? pokemon.type === selectedType : true;
      return matchesName && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <main className="">
      <Search
        id="search"
        placeholder="Rechercher un pokémon…"
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm('')}
        autoFocus
      />

      <SelectFilter<PokemonType>
        label="Type"
        options={POKEMON_TYPES}
        value={selectedType}
        onChange={setSelectedType}
        allLabel="Tous les types"
      />

      <List pokemons={filteredPokemons} onPokemonClick={(pokemon) => console.log('Choisi:', pokemon.name)} />
    </main>
  );
}

export default App;