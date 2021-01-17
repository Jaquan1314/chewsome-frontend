export const logIn = (userObj) => (dispatch) => {
  //BEFORE login fetch, check if the userObj being passed is undefined.
  //If so, get the user data from local storage IF there is user data in local storage.
  //If there is no user data in local storage, log in fetch will run.
  if (userObj === undefined) {
    const userDataStr = localStorage.getItem('USER_DATA');
    //user data must be parsed back to JSON
    let userDataObj = JSON.parse(userDataStr);
    if (userDataObj) {
      console.log('user data from local storage', userDataObj);
      //payload will be sent from local storage to reducers
      dispatch({ type: LOG_IN, payload: userDataObj });
    }
    return;
  }
  //normal log in fetch
  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application.json',
    },
    body: JSON.stringify(userObj),
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.id) {
        console.log('found user', data);
        //If user was fetched succesfully, user data will be added to local storage
        localStorage.setItem('USER_DATA', JSON.stringify(data));
        dispatch({ type: LOG_IN, payload: data });
      } else {
        console.log('user not found');
        window.alert('Wrong Username or Password Please Try Again');
      }
    })
    .catch(console.log);
};

//sign up action:
export const signUp = (userObj) => (dispatch) => {
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then((r) => r.json())
    .then((data) => {
      if (!data.id) {
        console.log('user creation failed');
        window.alert('Please Enter a Username and Password');
      } else {
        //this is where the user data gets stored to local storage, only if user creation was succesful. Gets turned from JSON into a string.
        localStorage.setItem('USER_DATA', JSON.stringify(data));
        dispatch({ type: SIGN_UP, payload: data });
      }
    })
    .catch(console.log);
};
