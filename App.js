import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import LandingStack from './src/routes/LandingStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { connect } from 'react-redux';
import { logIn } from './src/redux/actions/index';

function App(props) {
  useEffect(() => {
    props.logIn(undefined);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LandingStack />
      </NavigationContainer>
    </Provider>
  );
}
// export default App;

const mdp = (dispatch) => ({
  logIn: (userObj) => dispatch(logIn(userObj)),
});

export default connect(null, mdp)(App);
