import { PokemonsPage } from 'pages/pokemons';
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const PokemonPage = lazy(() => import('pages/pokemons/PokemonPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonsPage />,
  },
  {
    path: '/:name',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonPage />
      </Suspense>
    ),
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
