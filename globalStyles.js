import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 30,
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinButton: {
    backgroundColor: '#454B4A',
    borderRadius: 30,
    padding: 14,
    width: '100%',
    marginBottom: 15,
    // zIndex: 1,
  },
  signupButton: {
    backgroundColor: '#089D8B',
    borderRadius: 30,
    padding: 14,
    width: '100%',
    // zIndex: 1,
  },
  buttonText: {
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  circleCont: {
    position: 'relative',
  },
  turquoiseCircle: {
    height: 150,
    width: 150,
    position: 'absolute',
    top: 800,
    left: 300,
    borderRadius: 150 / 2,
    backgroundColor: 'turquoise',
    zIndex: -1,
  },
  turqCircle: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: 20,
    left: -70,
    borderRadius: 100 / 2,
    backgroundColor: 'turquoise',
    zIndex: -1,
  },
  smallCircle: {
    height: 90,
    width: 90,
    position: 'absolute',
    top: 455,
    left: 250,
    borderRadius: 90 / 2,
    backgroundColor: '#454B4A',
    zIndex: -1,
  },
});
