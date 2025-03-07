import React, { useState, useEffect } from "react";
import { View, Image, TextInput, StyleSheet, Alert, TouchableOpacity, Text, ScrollView, FlatList } from "react-native";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import data from "../data.json"; // Assuming data is in this file

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

          <View style={styles.item}>
            <Ionicons name="book-outline" size={20} color="orange" />
            <Text style={styles.text}>Categories</Text>
          </View>
        </ScrollView>
      </View>
      {/* Category End */}

      {/* For Wedding */}
      <View style={styles.item}>
      <Text style={styles.texts}>Wedding 💑</Text>
          </View>
      <View style={styles.containers}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => alert(`Clicked on ${item.name}`)}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.item}>
      <Text style={styles.texts}>Engagement 💍</Text>
           
          </View>
      <View style={styles.containers}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => alert(`Clicked on ${item.name}`)}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>


      <View style={styles.item}>
      <Text style={styles.texts}>Corporate Events 🏢</Text>   
          </View>
      <View style={styles.containers}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => alert(`Clicked on ${item.name}`)}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>


      <View style={styles.item}>
      <Text style={styles.texts}>Private & House Parties 🏠</Text>   
          </View>
      <View style={styles.containers}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => alert(`Clicked on ${item.name}`)}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      
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
  containers: {
    marginHorizontal: 2,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10, // Space between cards
    elevation: 3, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 10,
    width: 185, 
    height:100,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent:'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#555',
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  texts: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
