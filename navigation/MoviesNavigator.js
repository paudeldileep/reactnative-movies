import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Categories from "../screens/Categories";
import Favourites from "../screens/Favourites";
import Filters from "../screens/Filters";
import MovieDetails from "../screens/MovieDetails";
import CategorisedMovies from "../screens/CategorisedMovies";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MoviesNavigator = () => {

  const MoviesStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Categories" screenOptions={{headerStyle:{backgroundColor:Colors.cool_grey}}}>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Favourites"
          component={Favourites}
          options={{ title: "My Favourites" }}
        />

        <Stack.Screen
          name="Details"
          component={MovieDetails}
          options={({ route }) => ({
            title: route.params.movieName,
            headerTitleStyle: { textAlign: "center" },
          })}
        />
        <Stack.Screen
          name="Categorised"
          component={CategorisedMovies}
          options={({ route }) => ({
            title: route.params.categoryName,
            headerTitleStyle: { textAlign: "center" },
          })}
        />
      </Stack.Navigator>

    );
  }

  const FavStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:Colors.cool_grey}}}>
        <Stack.Screen
          name="Favourites"
          component={Favourites}
          options={{ title: "My Favourites" }}
        />
        <Stack.Screen
          name="Details"
          component={MovieDetails}
          options={({ route }) => ({
            title: route.params.movieName,
            headerTitleStyle: { textAlign: "center" },
          })}
        />
      </Stack.Navigator>
    )
  }



  const MoviesTabNavigator = () => {
    return (
      <Tab.Navigator shifting={true} activeColor={Colors.black} inactiveColor={Colors.silver} barStyle={{ backgroundColor: Colors.warm_grey }}>
        <Tab.Screen name="Movies" component={MoviesStackNavigator} options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Favourites" component={FavStackNavigator} options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>

    );
  }


  const FilterStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:Colors.cool_grey}}}>
        <Stack.Screen
          name="Filters"
          component={Filters}
          options={{ title: "Apply Filters" }}
        />
      </Stack.Navigator>
    )
  }

  //main return block
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Movies" drawerType="slide"  drawerStyle={{
        backgroundColor:Colors.silver,
        width:'50%',
        paddingTop:50,
        
      }} >
        <Drawer.Screen name="MoviesTabNavigator" component={MoviesTabNavigator} options={{drawerLabel:'Movies'}} />
        <Drawer.Screen name="FilterStackNavigator" component={FilterStackNavigator} options={{drawerLabel:'Apply Filters'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );


};

export default MoviesNavigator;
