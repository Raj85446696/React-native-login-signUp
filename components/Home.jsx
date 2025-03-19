import React, { useState, useEffect } from "react";
import { View, Image, TextInput, StyleSheet, Alert, TouchableOpacity, Text, ScrollView, FlatList } from "react-native";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import data from "../data.json"; 

const App = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  {/* Function for fetching api data for location*/}
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
        setLocation(`${address[0].city}, ${address[0].country}, ${address[0].postalCode}`);
      } else {
        setLocation("Location not found");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch location");
    }
  };

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Nav-bar Start */}
      <View style={styles.container}>
        <Image source={require("../assets/user.jpeg")} style={styles.image} />
        <TextInput
          style={styles.input}
          value={location}
          placeholder="Fetching location..."
          editable={false}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={() => alert("Notification worked Properly...")}>
          <Ionicons name="notifications-outline" size={25} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>+1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Profile worked Properly...")}>
          <Ionicons name={"person-outline"} size={25} color={'black'} style={styles.icons} />
        </TouchableOpacity>
      </View>
      {/* Nav-bar End */}

      {/* Category Start */}
      <View style={styles.category}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.item}>
            <Ionicons name="trending-up-outline" size={20} color="blue" />
            <Text style={styles.text}>Top Charts</Text>
          </View>

          <View style={styles.item}>
            <Ionicons name="eye-outline" size={20} color="red" />
            <Text style={styles.text}>For you</Text>
          </View>

          <View style={styles.item}>
            <Ionicons name="diamond-outline" size={20} color="green" />
            <Text style={styles.text}>Premiums</Text>
          </View>

          <View style={styles.item}>
            <Ionicons name="film-outline" size={20} color="purple" />
            <Text style={styles.text}>Offers</Text>
          </View>

          
        </ScrollView>
      </View>
    

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10,
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
  icons: {
    marginLeft: 10,
  },
  iconContainer: {
    position: "relative",
    marginRight: 15,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  category: {
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "bold",
    color: "black",
  },
  
});

export default App;
