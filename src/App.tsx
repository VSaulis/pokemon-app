import { Theme } from '@radix-ui/themes';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'core/query/client';
import { store } from 'core/store/store';
import { setupTranslations } from 'i18n/setup';
import React from 'react';
import { Provider } from 'react-redux';

import Router from './Router';

setupTranslations();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Router />
        </Theme>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
