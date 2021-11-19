
import React from 'react';
import { View, Text } from 'react-native';
import MoviesNavigator from './navigation/MoviesNavigator';

import { useFonts } from 'expo-font';

import UbuntuBold from './assets/fonts/Ubuntu-Bold.ttf';
import UbuntuRegular from './assets/fonts/Ubuntu-Regular.ttf';

import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import moviesReducer from './store/reducers/movies';

const rootReducer=combineReducers({
  movies:moviesReducer
})
const store=createStore(rootReducer);

export default function App() {

  const [loaded] = useFonts({
    UbuntuBold, UbuntuRegular
  });

  if (!loaded) {
    return <View style={{ flex: 1, alignItems: 'center' }}><Text>Loading...</Text></View>
  }

  return <Provider store={store}><MoviesNavigator /></Provider>
}

