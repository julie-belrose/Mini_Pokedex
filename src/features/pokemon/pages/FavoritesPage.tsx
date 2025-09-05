
import { EmptyState } from '../../../shared/components/EmptyState';

export const FavoritesPage = () => {
  const favorites = [] as string[];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mes Pokémon Favoris</h1>
      
      {favorites.length > 0 ? (
        <p>Vous avez {favorites.length} Pokémon(s) favori(s).</p>
      ) : (
        <EmptyState 
          title="Aucun favori" 
          message="Vous n'avez pas encore de Pokémon favori. Ajoutez-en depuis la page d'accueil !" 
          actionText="Voir les Pokémon"
          actionPath="/"
        />
      )}
    </div>
  );
};
