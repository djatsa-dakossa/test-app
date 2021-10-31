/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import Auth from './src/components/auth/Auth';

import store from './src/store';


const RNRedux = () => (
    <Provider store = { store }>
      <Auth>
        <App />
      </Auth>
    </Provider>
  )


AppRegistry.registerComponent(appName, () => RNRedux);
