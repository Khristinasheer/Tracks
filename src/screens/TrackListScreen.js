import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>TrackList Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default TrackListScreen;
