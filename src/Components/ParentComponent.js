import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
   const handleParentClick = () => {
   
        console.log("Parent event handler")
    }
    return (
        <>
        <div onClick = {handleParentClick}>
            ParentComponent
            <ChildComponent />
            
        </div>
        </>
    )
}