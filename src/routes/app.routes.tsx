import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../screen/Home";
import { Profile } from "../screen/Profile";
import { Search } from "../screen/Search";
import { Favorites } from "../screen/Favorites";

const tab = createBottomTabNavigator();

const AppRoutes = () => {
  const { Screen, Navigator } = tab;

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor:'#9fe801',
        tabBarInactiveTintColor:'#fff',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#171626",
          borderTopWidth: 0,
          bottom: 14,
          right: 14,
          left: 14,
          elevation: 0,
          borderRadius: 8,
          height: 60,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            }
            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="bookmark" size={size} color={color} />;
            }
            return <Ionicons name="bookmark-outline" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
};

export { AppRoutes };
