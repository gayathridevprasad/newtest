import {useState} from 'react'

const Movie=({name,amount})=>{
  return (
    <div>
        <h1>{name}</h1>
        <h3>{amount}</h3>
    </div>
  )
}

export default Movie;