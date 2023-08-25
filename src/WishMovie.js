import {useState,useContext} from 'react';

import {MovieContext} from './MovieContext';

const WishMovie=()=>{
    const [movies,setMovies]=useContext(MovieContext);
    const [name,setName]=useState('');
    const [amount,setAmount]=useState('');

    const handleSubmit=(e)=>{
     e.preventDefault();
     setMovies((p)=>[...p,{id:Math.random(),name:name,amount:amount}])
     setName('')
     setAmount('')
    }

   const handleNameChange=(e)=>{
     setName(e.target.value);
   }

const handleAmountChange=(e)=>{
    setAmount(e.target.value);
}
    return (
         <form onSubmit={handleSubmit}>

            <input type='text' name='name' onChange={handleNameChange}/>

            <input type='text' name='amount' onChange={handleAmountChange}/>

            <button type='submit'>Submit</button>
         </form>
    )
}

export default WishMovie;