import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "./components/Spacer";
import AuthForm from "./components/AuthForm";
import NavLink from "./components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm title="Sign in" error={state.errorMessage} onSubmit={signin} />
      <NavLink
        text="Don't have an account? Sign up instead."
        routeName="Signup"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 90
  }
});

export default SigninScreen;
