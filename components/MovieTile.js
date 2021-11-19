import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";

import Colors from "../constants/Colors";
import CustomText from "./CustomText";

const MovieTile = (props) => {
  return (
    
      <TouchableOpacity
        style={styles.opacityContainer}
        onPress={()=>props.onMoviePress()}
      >
        <View style={styles.viewContainer}>
          <View style={{ ...styles.movieRow, ...styles.movieHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.image}
            >
              <Text style={styles.titleText}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.movieRow, ...styles.movieInfo }}>
            <CustomText>{props.duration} Hrs</CustomText>
            <CustomText>{props.affordability}</CustomText>
            <CustomText>{props.complexity}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
   
  );
};

export default MovieTile;

const styles = StyleSheet.create({
  opacityContainer: {
    height: 200,
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 15,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 5,
    marginVertical: 10,
  },
  
  viewContainer: {
    width: "100%",
  },
  movieRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  movieHeader: {
    height: "80%",
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleText: {
    color: Colors.white,
    fontSize: 20,
    overflow: "scroll",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    textAlign: "center",
    fontFamily: "UbuntuBold",
  },
  movieInfo: {
    height: "20%",
    backgroundColor: Colors.cool_grey,
    alignItems:'center',

  },
  
});
