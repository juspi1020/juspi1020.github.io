import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // la funcion solo se ejecuta una vez cuando se renteriza el componente
    // useEffect(() => {
    //     getGifs();
    // }, [])


    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs));
    }, [category]);

    return (
        <>
            <h3>
                {category}
            </h3>
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
                }
            </div>
        </>
    )
}
