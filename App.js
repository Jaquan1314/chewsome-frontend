import 'react-native-gesture-handler';
import React from 'react';
import LandingStack from './src/routes/LandingStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <LandingStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
