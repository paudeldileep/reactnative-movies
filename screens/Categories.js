import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
 
} from "react-native";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

import Colors from '../constants/Colors';
import HeaderButton from "../components/HeaderButton";

const Categories = ({ navigation }) => {
  const [containerWidth, setContainerWidth] = useState(
    Dimensions.get("window").width * 0.4
  );

  //menu toggler
  const MenuToggler=()=>{
    navigation.toggleDrawer();
  }
  //left menu button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onButtonPress={MenuToggler} style={{paddingLeft:5}} iconName="bars"/>
      ),
    });
  }, [navigation]);


  //render movie categories
  const renderDataItem = (itemData) => (
    <CategoryTile
      onTilePress={() =>
        navigation.navigate("Categorised", {
          categoryName: itemData.item.title,
          categoryId: itemData.item.id,
        })
      }
      title={itemData.item.title}
      color={itemData.item.color}
      style={{ width: containerWidth }}
    />
  );

  //to dynamically change dimension when screen rotates/screen size changes
  useEffect(() => {
    const changeLayout = () => {
      setContainerWidth(Dimensions.get("window").width * 0.4);
    };
    Dimensions.addEventListener("change", changeLayout);
    return () => {
      Dimensions.removeEventListener("change", changeLayout);
    };
  });

  //main return block
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={renderDataItem}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.silver
  },
});
