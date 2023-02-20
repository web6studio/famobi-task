import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

const queryClient = new QueryClient();

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  </NavigationContainer>
);

export default App;
