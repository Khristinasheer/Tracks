import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={styles.text}>Account Screen</Text>
        <Spacer />
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default AccountScreen;
