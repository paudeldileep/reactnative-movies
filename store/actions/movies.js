import { SET_FILTERS, TOGGLE_FAVOURITE } from "./types"

export const toggleFavourite=(id)=>{
    
    return {type:TOGGLE_FAVOURITE,movieId:id};
}

export const applyFilters= filters=>{
    return {type:SET_FILTERS,filtersToApply:filters}
}