import React from 'react';
import AppNavigation from './src/components/app/navigation/AppNavigation';
import { NewsProvider } from './src/components/app/news/utilities/NewsContext';
import { UserProvider } from './src/components/app/users/utilities/UsersContext';

const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <AppNavigation />
      </NewsProvider>
    </UserProvider>
  );
};
export default App;
//ctrl + G : mo dong muon den