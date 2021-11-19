import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from '../constants/Colors';

const CategoryTile = (props) => {
{/* 
    let TouchComponent=TouchableOpacity;

    if(Platform.OS==='android' && Platform.Version>=21){
        TouchComponent=TouchableNativeFeedback;
    }
    */}
  return (
    <TouchableOpacity
      onPress={props.onTilePress}
      style={{ ...props.style, ...styles.itemContainer }}
    >
      <View
        style={{ ...styles.viewContainer, ...{ backgroundColor: props.color } }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 2,
    height: 100,
    marginVertical: 20,

    overflow: "hidden",
    shadowColor:Colors.white,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 5,
  },
  viewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
