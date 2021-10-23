/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import type {Node} from 'react';
import {
  Text
} from 'react-native';

import Routes from './src/routes/Routes';


const App: () => Node = () => {

  return (
    <NavigationContainer fallback={<Text style={{color: '#000'}}>Loading...</Text>}>
      <Routes/>
    </NavigationContainer>
  );
};


export default App;
