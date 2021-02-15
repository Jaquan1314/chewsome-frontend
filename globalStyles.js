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
    borderColor: '#ddd',
    padding: 14,
    fontSize: 18,
    borderRadius: 30,
    textAlign: 'center',
    width: '100%',
  },
  emailIcon: {
    position: 'absolute',
    top: 233,
    left: 30,
    zIndex: 1,
  },
  pwIcon: {
    position: 'absolute',
    top: 293,
    left: 30,
    zIndex: 1,
  },
  signinButton: {
    backgroundColor: '#454B4A',
    borderRadius: 30,
    padding: 14,
    width: 340,
    // marginTop: 70,
    marginBottom: 15,
    // zIndex: 1,
  },
  googleSigninButton: {
    backgroundColor: '#35baf6',
    borderRadius: 30,
    padding: 14,
    width: 340,
  },
  signupButton: {
    backgroundColor: '#089D8B',
    borderRadius: 30,
    padding: 14,
    width: 340,
    marginBottom: 15,
    // zIndex: 1,
  },
  logOutButton: {
    backgroundColor: '#089D8B',
    borderRadius: 30,
    padding: 8,
    width: 340,
  },
  buttonText: {
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});
