import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import CustomText from '../components/CustomText';
//import { MOVIES } from '../data/dummy-data';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import { useSelector,useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/actions/movies';
import { color } from 'react-native-reanimated';

const MovieDetails = ({ navigation, route }) => {

    
    //get state data
    const MOVIES= useSelector(state=> state.movies.allMovies);
    
    

    const movieId = route.params.movieId;
    const currentMovie = MOVIES.find(movie => movie.id === movieId);
    
    //check if current movie a favourite one
    const isFavMovie= useSelector(state=> state.movies.favMovies.some(mov=>mov.id===movieId));

    const dispatch=useDispatch();
    const favHandler = useCallback(() => {
        //console.log('dispatch');
        dispatch(toggleFavourite(movieId));
    },[movieId])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButton onButtonPress={favHandler} style={{ paddingRight: 5}} color={isFavMovie ? 'green' :'black'} iconName={isFavMovie? 'star' : 'star-o'} />
            ),
        });
    }, [navigation,isFavMovie,favHandler]);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <View style={styles.viewContainer}>

                <Image resizeMode="contain" source={{ uri: currentMovie.imageUrl }} style={styles.image} />

                <View style={styles.info}>
                    <CustomText >{currentMovie.duration} Hrs</CustomText>
                    <CustomText>{currentMovie.affordability}</CustomText>
                    <CustomText>{currentMovie.complexity}</CustomText>
                </View>
                <Text style={styles.titleText}>Actors</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.actors}>
                    {currentMovie.actors.map(actor => <CustomText style={styles.actorText} key={actor}><Icon name="user-tie" size={14} /> {actor}</CustomText>)}
                </ScrollView>
                <Text style={styles.titleText}>Synopsis</Text>
                <Text style={styles.synopsisText}>{currentMovie.synopsis}</Text>
            </View>
        </ScrollView>

    );
}

export default MovieDetails;


const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:Colors.silver,
    },
    viewContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    image: {
        height: 200,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    titleText: {
        fontFamily: 'UbuntuBold',
        fontSize: 18,
        marginTop:5
    },
    actors: {
        paddingVertical: 10
    },
    actorText: {
        paddingRight: 5,
        marginRight: 15
    },
    synopsisText: {
        fontFamily: 'UbuntuRegular',
        textAlign:'justify',
        paddingVertical: 5
    }
})