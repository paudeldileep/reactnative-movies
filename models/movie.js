class Movie{
    constructor(id,categoryIds,title,affordability,complexity,imageUrl,duration,actors,synopsis,isWorthWatching,isInspirational,isInteresting,isThrilling){
        this.id=id;
        this.categoryIds=categoryIds;
        this.title=title;
        this.affordability=affordability;
        this.complexity=complexity;
        this.imageUrl=imageUrl;
        this.duration=duration;
        this.actors=actors;
        this.synopsis=synopsis;
        this.isWorthWatching=isWorthWatching;
        this.isInspirational=isInspirational;
        this.isInteresting=isInteresting;
        this.isThrilling=isThrilling;
        
    }
}

export default Movie;