import { useState } from "react";
function Button() {
    const [value, setValue] = useState("Click");

    const handleClick = () => {
        setValue("You have clicked the button");
    }
    return (<>

    <button title="tButton" onClick={handleClick}>
       {value}
    </button>
    
    </>
    );
}
export default Button;