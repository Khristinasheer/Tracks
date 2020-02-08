import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authProvider = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      // always return new object
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    // Make api request to sign up with that email and psw
    const response = await trackerApi.post("/signup", { email, password });

    await AsyncStorage.setItem("token", response.data.token);
    // If we sign up, modify our state, and say we're authenticated
    dispatch({ type: "signup", payload: response.data.token });

    console.log(response.data);

    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });

    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signin", payload: response.data.token });

    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

const signout = dispatch => {
  return () => {
    // Somehow signout
  };
};

export const { Provider, Context } = createDataContext(
  authProvider,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
