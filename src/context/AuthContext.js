import createDataContext from "./createDataContext";

const authProvider = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({ email, password }) => {
    // Make api request to sign up with that email and psw
    // If we sign up, modify our state, and say we're authenticated
    // If sign up fails, show error
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // Try to sign in
    // Handle success by updating state
    // Handle failure by throwing an error
  };
};

const signout = dispatch => {
  return () => {
    // Somehow signout
  };
};

export const { Provider, Context } = createDataContext(
  authProvider,
  { signup, signin, signout },
  { isSignedIn: false }
);
