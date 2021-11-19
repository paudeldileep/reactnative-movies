import React, { useState,useCallback } from 'react';
import { StyleSheet, View, Text, Switch, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { applyFilters } from '../store/actions/movies';

const Filters = (props) => {

    
    const [isWorth, setIsWorth] = useState(false);
    const [isInspirational, setIsInspirational] = useState(false);
    const [isInteresting, setIsInteresting] = useState(false);
    const [isThrilling, setIsThrilling] = useState(false);

    const dispatch=useDispatch();

    const saveFilters = useCallback(() => {
        
        let appliedFilters = {
            worthWatching: isWorth,
            inspirational: isInspirational,
            interesting: isInteresting,
            thrilling: isThrilling
        }
        console.log(appliedFilters);
        
        //dispatching action to function in actions react-redux
        dispatch(applyFilters(appliedFilters));

       // Alert.alert('Hurray!','Filters applied!',[{text:'Okay'}]);

    },[isInspirational,isInteresting,isWorth,isThrilling]);


    //menu toggler
    const MenuToggler = () => {
        props.navigation.toggleDrawer();
    }


    React.useLayoutEffect(() => {

        //passing savedFilters reference to navigation
        //props.navigation.setParams({save:saveFilters})
        //left menu button
        props.navigation.setOptions({
            headerLeft: () => (
                <HeaderButton onButtonPress={MenuToggler} style={{ paddingLeft: 5 }} iconName="bars" />
            ),
        });
        //right save button
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButton onButtonPress={()=>saveFilters()} style={{ paddingRight: 5 }} iconName="save" />
            ),
        });
    }, [props.navigation,saveFilters]);

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Make your selection</Text>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Is isWorthWatching?</Text>
                <Switch
                    trackColor={{ false: Colors.slate_grey, true: Colors.cool_grey }}
                    thumbColor={isWorth ? "#088F8F" : "#D22B2B"}
                    onValueChange={newVal=>setIsWorth(newVal)}
                    value={isWorth}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Is isInspirational?</Text>
                <Switch
                    trackColor={{ false: Colors.slate_grey, true: Colors.cool_grey }}
                    thumbColor={isInspirational ? "#088F8F" : "#D22B2B"}
                    onValueChange={newVal=>setIsInspirational(newVal)}
                    value={isInspirational}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Is Interesting?</Text>
                <Switch
                    trackColor={{ false: Colors.slate_grey, true: Colors.cool_grey }}
                    thumbColor={isInteresting ? "#088F8F" : "#D22B2B"}
                    onValueChange={newVal=>setIsInteresting(newVal)}
                    value={isInteresting}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Is isThrilling?</Text>
                <Switch
                    trackColor={{ false: Colors.slate_grey, true: Colors.cool_grey }}
                    thumbColor={isThrilling ? "#088F8F" : "#D22B2B"}
                    onValueChange={newVal=>setIsThrilling(newVal)}
                    value={isThrilling}
                    style={styles.switch}
                />
            </View>
        </View>
    );
}

export default Filters;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.silver,
        paddingTop: '30%'
    }, title: {
        fontFamily: 'UbuntuBold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20
    },
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginVertical: 20,

    },
    filterText: {
        fontFamily: 'UbuntuRegular',
        fontSize: 18
    },

})