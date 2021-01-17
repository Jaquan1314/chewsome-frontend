import 'react-native-gesture-handler';
import React from 'react';
import LandingStack from './src/routes/LandingStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LandingStack />
      </NavigationContainer>
    </Provider>
  );
}
