import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
//"rafc" para crear un componente de react

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Samurai X']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            <ol>
                {categories.map((category) =>
                    <GifGrid 
                    key= {category}
                    category={category}/>
                )
                }
            </ol>
        </>
    );

};
export default GifExpertApp;