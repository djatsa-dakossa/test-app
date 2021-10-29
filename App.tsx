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
import Auth from './src/components/auth/Auth';



const App: () => Node = () => {

  return (
      <Auth>
        <NavigationContainer fallback={<Text style={{color: '#000'}}>Loading...</Text>}>
            <Routes/>
        </NavigationContainer>
      </Auth>
  );
};


export default App;
