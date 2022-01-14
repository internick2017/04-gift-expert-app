import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => { // no pueden ser asycn

        getGifs(category)

            .then(img => {
                setTimeout(() => {
                    console.log(img)
                    setstate({
                        data: img,
                        loading: false
                    })
                }, 3000)
            })

    }, [category])



    return state; // {data:[], loading: true}
}