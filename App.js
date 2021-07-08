import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import MainTab from './src/navigation/MainTab';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </>
  );
};

export default App;
