import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

const CustomText = (props) => {
    return <Text style={{...props.style,...styles.customText}}>{props.children}</Text>
}

export default CustomText;

const styles=StyleSheet.create({
    customText: {
        fontFamily:'UbuntuRegular',
        fontSize:16,
        color:Colors.gun_metal
      },
})