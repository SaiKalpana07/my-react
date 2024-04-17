import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const[currentPage,setCurrentPage] = useState(1)
    const items = [
        { id: 1, name: 'Item 1' }, 
        { id: 2, name: 'Item 2' }, 
        { id: 3, name: 'Item 3' }, 
        { id: 4, name: 'Item 4' }, 
        { id: 5, name: 'Item 5' }, 
        { id: 6, name: 'Item 6' }, 
        { id: 7, name: 'Item 7' }, 
        { id: 8, name: 'Item 8' }, 
        { id: 9, name: 'Item 9' }, // ... more items
        ];

        const itemsPerPage = 3;
        const totalCount = Math.ceil(items.length/itemsPerPage)
        const startIndex = (currentPage - 1)*itemsPerPage
        const endIndex = startIndex + totalCount;
        const currentItem = items.slice(startIndex,endIndex)

        const handleChange = () => {
            console.log(currentPage)
            setCurrentPage(currentPage+1)           
        }

   const handleParentClick = () => {
        console.log("Parent event handler")
    }

    return (
        <>
        <div
        //  onClick = {handleParentClick}
        >
            ParentComponent
            <ChildComponent />
            <ul>
                {currentItem.map((item) => (
                 <li>{item.name}</li>
                ))}
            </ul>
            <button>{currentPage-1}</button>
            <span>{currentPage}</span>
            <button  onChange={handleChange}>{currentPage+1}</button>
        </div>
        <br></br>
        </>
    )
}