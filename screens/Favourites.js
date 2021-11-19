import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import MovieList from '../components/MovieList';
//import { MOVIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const Favourites = (props) => {

    //menu toggler
    const MenuToggler = () => {
        props.navigation.toggleDrawer();
    }
    //left menu button
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <HeaderButton onButtonPress={MenuToggler} style={{ paddingLeft: 5 }} iconName="bars" />
            ),
        });
    }, [props.navigation]);

    //const favMovies = MOVIES.filter(mov => mov.id === 'm1' || mov.id === 'm2')
    //get state data
    const favMovies= useSelector(state=> state.movies.favMovies);

    if(favMovies?.length<=0){
        return <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor: Colors.silver}}><Text style={{fontFamily:'UbuntuRegular'}}>You don't have any favourites yet!</Text></View>
    }
    
    return (
        <MovieList navigation={props.navigation} currentMovies={favMovies} />
    );
}

export default Favourites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})