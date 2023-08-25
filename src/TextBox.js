import {useState} from 'react';

const TextBox =()=>{

    const [value,setValue]=useState('');

    const handleChange=(e)=>{
     setValue(e.target.value)
    }
return (
  <>
    <input type="text" title="MyText"
     value={value}
     onChange={handleChange}/>

  </>
)
}

export default TextBox;