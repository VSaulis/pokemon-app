import { Theme } from '@radix-ui/themes';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'core/query/client';
import { store } from 'core/store/store';
import { setupTranslations } from 'i18n/setup';
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PokemonPage, PokemonsPage } from './pages';

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

setupTranslations();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
