import React, { useState } from "react";


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball']

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    const handleApp = () => {
        // setCategories([...categories, 'Shaman King']);
        // setCategories(['Shaman King', ...categories]);
        setCategories(cate => [...cate, 'Stein Gates']);
    }
    return (

        <>
            <h2> GifExpertApp </h2>
            <hr />

            <button onClick={handleApp}> Agregar </button>
            <ol>

                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })

                }

            </ol>

        </>

    );

}

export default GifExpertApp;