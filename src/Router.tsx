import { PokemonPage, PokemonsPage } from 'pages';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonsPage />,
  },
  {
    path: '/:name',
    element: <PokemonPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
