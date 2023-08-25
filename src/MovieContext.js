import { createContext,useState } from "react";

export const MovieContext=createContext();

export const MovieProvider=(props)=>{

    const [movies,setMovies]=useState([
      {
       id:1,
       name:"Jailer",
       amount:120
      },
      {
        id:2,
        name:"Goftha",
        amount:120
      }
    ]);


    return (
        <MovieContext.Provider value={[movies,setMovies]}>
          {props.children}
        </MovieContext.Provider>
    )
}