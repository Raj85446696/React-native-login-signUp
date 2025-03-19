import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../components/Home";

const categories = [
  { id: "1", name: "Wedding" },
  { id: "2", name: "Marriage" },
  { id: "3", name: "Birthday" },
  { id: "4", name: "Anniversary" },
  { id: "5", name: "Corporate Event" },
  { id: "6", name: "Festival" },
  { id: "7", name: "Concert" },
  { id: "8", name: "Sports Event" },
  { id: "9", name: "Exhibition" },
  { id: "10", name: "Workshop" },
  { id: "11", name: "Seminar" },
  { id: "12", name: "Baby Shower" },
  { id: "13", name: "Charity Event" },
  { id: "14", name: "Graduation Party" },
  { id: "15", name: "Cultural Event" },
  { id: "16", name: "Product Launch" },
  { id: "17", name: "Trade Show" },
  { id: "18", name: "Reunion" },
  { id: "19", name: "Farewell Party" },
  { id: "20", name: "Book Launch" },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      {/* Home Component with some margin */}
      <View style={styles.homeContainer}>
        <Home />
      </View>

      {/* Category List */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.categoryName}>{item.name}</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  homeContainer: {
    marginBottom: 20, 
  },
  listContainer: {
    paddingBottom: 20, 
  },
  card: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    alignItems: "stretch",
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
