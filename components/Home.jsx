import React, { useState, useEffect } from "react";
import { View, Image, TextInput, StyleSheet, Button, Alert } from "react-native";
import * as Location from "expo-location";

const App = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Allow location access to fetch data");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;

      // Convert coordinates to a human-readable address
      let address = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address.length > 0) {
        setLocation(`${address[0].city}, ${address[0].country}`);
      } else {
        setLocation("Location not found");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch location");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/user.jpeg")} style={styles.image} />
      <TextInput
        style={styles.input}
        value={location}
        placeholder="Fetching location..."
        editable={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,

   },
  input: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
