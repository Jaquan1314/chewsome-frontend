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
  input: {
    borderRadius: 30,
    width: '100%',
  },
  userIcon: {
    position: 'absolute',
    top: 8,
    left: 25,
    zIndex: 1,
  },
  emailIcon: {
    position: 'absolute',
    top: 8,
    left: 25,
    zIndex: 1,
  },
  pwIcon: {
    position: 'absolute',
    top: 8,
    left: 25,
    zIndex: 1,
  },
  signinButton: {
    backgroundColor: '#454B4A',
    borderRadius: 30,
    padding: 14,
    width: 340,
    marginBottom: 15,
  },
  googleSigninButton: {
    backgroundColor: '#35baf6',
    borderRadius: 30,
    padding: 14,
    width: 340,
  },
  signupButton: {
    backgroundColor: '#089D8B',
    borderRadius: 25,
    padding: 14,
    width: 340,
    marginBottom: 15,
  },
  logOutButton: {
    backgroundColor: '#089D8B',
    borderRadius: 30,
    padding: 8,
    width: 230,
  },
  buttonText: {
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});
