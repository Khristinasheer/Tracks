// import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import TrackForm from "../components/TrackForm";
// expo-location has a bug, decline of location doesn't result in error
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import Map from "../components/Map";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, // get an update every second
          distanceInterval: 10 // get an update every 10 meter
        },
        location => {
          console.log(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create Track</Text>
      <Spacer />
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
