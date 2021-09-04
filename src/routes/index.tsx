import React from "react";

import Home from "../pages/Home";
import NewItem from "../pages/NewItem";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#202124",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewItem"
          component={NewItem}
          options={{ title: "Novo Item" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
