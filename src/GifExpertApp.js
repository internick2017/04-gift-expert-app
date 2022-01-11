import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball']

    const [categories, setCategories] = useState(['One Punch']);

    // const handleApp = () => {
    //     // setCategories([...categories, 'Shaman King']);
    //     // setCategories(['Shaman King', ...categories]);
    //     setCategories(cate => [...cate, 'Stein Gates']);
    // }
    return (

        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleApp}> Agregar </button> */}
            <ol>

                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )

                }

            </ol>

        </>

    );

}

export default GifExpertApp;