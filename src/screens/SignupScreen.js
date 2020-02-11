import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "./components/Spacer";
import AuthForm from "./components/AuthForm";
import NavLink from "./components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => {
          clearErrorMessage();
        }}
      />
      <AuthForm title="Sign up" error={state.errorMessage} onSubmit={signup} />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 90
  }
});

export default SignupScreen;
