import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Home from "../components/Home"; // Ensure this component is used appropriately
import data from "../data.json";

export default function MyEventsScreen() {
  return (
    <View style={styles.container}>
      {/* Home Component */}
      <View style={styles.homeContainer}>
        <Home />
      </View>

      {/* Card display section */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => alert(`Clicked on ${item.name}`)}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.description}>{item.description}</Text>

              {/* Buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.confirmButton} onPress={() => alert('Confirmed')}>
                  <Text style={styles.buttonText}>Confirmed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => alert('Cancelled')}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} 
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  homeContainer: {
    height: 100,  // Ensure that the Home component doesn't overlap
    marginBottom: 20, // Space between Home and the cards
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20, // Spacing between cards
    elevation: 3, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 10,
    width: "100%",
    height: 180,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: 'column',
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  location: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
    flexWrap: "wrap",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 5, // Space between the two buttons
  },
  cancelButton: {
    backgroundColor: "#F44336", // Red for cancel
    paddingVertical: 8, // Button padding for cancel
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
