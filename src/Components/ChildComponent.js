import React, { useState } from  'react';

export default function ChildComponent() {
    const[fruits,setFruits] = useState("")
    const handleChildClick = (e) => {
         e.stopPropagation();
     console.log("Child Component event")
     }
     const handleListChange = (e) => {
        setFruits(e.target.value)
     }
    return (
        <>
        <div onClick = {handleChildClick}>
        ChildComponent
        <button>Click here</button>
        <div>
            Simple Event Example
        </div>
        <label>Enter the fruits list:</label>
        <input type ="text" onChange={handleListChange}></input>
        <h4>You entered:{fruits}</h4>
        </div>
        </>
    )
}