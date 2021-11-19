import React from "react";
//import { MOVIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { View,Text } from "react-native";
import MovieList from "../components/MovieList";
import Colors from "../constants/Colors";

const CategorisedMovies = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;

  const MOVIES = useSelector(state => state.movies.filteredMovies);

  const currentMovies = MOVIES.filter(
    (movie) => movie.categoryIds.indexOf(categoryId) >= 0
  );

  if (currentMovies?.length <= 0) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: Colors.silver }}><Text style={{ fontFamily: 'UbuntuRegular' }}>No Movies found with current filters applied!</Text></View>
  }

  return (
    <MovieList navigation={navigation} currentMovies={currentMovies} />
  );
};

export default CategorisedMovies;


