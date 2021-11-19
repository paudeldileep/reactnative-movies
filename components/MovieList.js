//for listing passed movies data

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MovieTile from "./MovieTile";
import Colors from "../constants/Colors";

const MovieList = (props) => {
    
  const renderMovieItem = (itemData) => {
    const handleNavigation = () => {
      return props.navigation.navigate("Details", {
        movieName: itemData.item.title,
        movieId: itemData.item.id,
      });
    };

    return (
      <MovieTile
        onMoviePress={handleNavigation}
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.currentMovies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.silver,
  },
});
