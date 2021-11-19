import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderButton = (props) => {
    return <TouchableOpacity style={{...props.style,...styles.buttonContainer}} onPress={props.onButtonPress}>
        <Icon size={24} name={props.iconName} color={props.color} />
    </TouchableOpacity>
}

export default HeaderButton;

const styles=StyleSheet.create({
    buttonContainer:{
        
    }
})