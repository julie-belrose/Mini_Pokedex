import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PokemonDetail } from '../pages/PokemonDetail';
import { FavoritesPage } from '../pages/FavoritesPage';
import { TeamPage } from '../pages/TeamPage';
import { ProfilePage } from '../pages/ProfilePage';
import { Layout } from '../components/Layout';

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
