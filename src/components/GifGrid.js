import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    useEffect(() => {
        getGifs();
    }, [])
    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Bleach&limit=10&api_key=dOv0LM1e9OjbMAvId5PDvdTySsgzD3ri';
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
    }

    return (
        <>
            <h3>{category}</h3>
            <button></button>
        </>
    )
}
