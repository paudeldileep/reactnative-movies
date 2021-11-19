import {MOVIES} from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVOURITE } from '../actions/types';

//initial state
const initialState={
    allMovies:MOVIES,
    filteredMovies:MOVIES,
    favMovies:[]
};

const moviesReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case TOGGLE_FAVOURITE:
            const currentIndex=state.favMovies.findIndex(movie=>movie.id===action.movieId);
            
            if(currentIndex >=0){
                
                //item already is a favourite,so remove it
                const newFavMovies=[...state.favMovies];
                newFavMovies.splice(currentIndex,1);
                return {...state,favMovies:newFavMovies}
            }
            else{
                
                 //add item to favMovies array
                 const movieToAdd=state.allMovies.find(mov=>mov.id===action.movieId);
                 //newFavMovies.concat(movieToAdd);
                 return {...state,favMovies:state.favMovies.concat(movieToAdd)};
            }

        case SET_FILTERS:
            const filters=action.filtersToApply;
            const newFilteredMovies=state.allMovies.filter(movie=>{
                if(filters.worthWatching && !movie.isWorthWatching){
                    return false;
                }
                if(filters.inspirational && !movie.isInspirational){
                    return false;
                }
                if(filters.interesting && !movie.isInteresting){
                    return false;
                }
                if(filters.thrilling && !movie.isThrilling){
                    return false;
                }
                return true;
            })
            return{...state,filteredMovies:newFilteredMovies};
        default:
            return state;
    }

    
}

export default moviesReducer;