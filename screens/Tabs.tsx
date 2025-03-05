import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import CreateEventScreen from "./CreateEventScreen";
import MyEventsScreen from "./MyEventsScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator id={undefined}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Explore") iconName = "search-outline";
          else if (route.name === "Create Event") iconName = "add-circle-outline";
          else if (route.name === "My Events") iconName = "calendar-outline";
          else if(route.name === "Home") iconName = "home-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="My Events" component={MyEventsScreen} />
      <Tab.Screen name="Create Event" component={CreateEventScreen} />
    </Tab.Navigator>
  );
}
