import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default AccountScreen;
