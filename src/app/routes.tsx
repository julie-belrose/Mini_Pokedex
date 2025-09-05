import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../features/pokemon/pages/HomePage';
import { PokemonDetail } from '../features/pokemon/pages/PokemonDetail';
import { FavoritesPage } from '../features/pokemon/pages/FavoritesPage';
import { TeamPage } from '../features/trainer/pages/TeamPage';
import { ProfilePage } from '../features/trainer/pages/ProfilePage';
import { Layout } from '../shared/components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonDetail />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);
