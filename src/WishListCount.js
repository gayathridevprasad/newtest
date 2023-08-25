import {useState,useContext} from 'react';

import {MovieContext} from './MovieContext';

const WishListCount=()=>{
    const [movies,setMovies]=useContext(MovieContext);

    return (
        <div>
           <h1> No of movies in the wishlist: {movies.length} </h1>
        </div>
    )
}

export default WishListCount;