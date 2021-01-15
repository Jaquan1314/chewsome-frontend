import 'react-native-gesture-handler';
import React from 'react';
import LandingStack from './src/routes/LandingStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <LandingStack />
    </NavigationContainer>
  );
}
