import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

import './Products.css'

export default function Categories() {

    const [categories, setCategories] = useState([])

    const {data, loading, error} = useFetch("/categories?populate=*")

    useEffect(()=>{
        // data && console.log(data) = console.log(data) Only if data is not null
        data && setCategories(data);
        console.log(categories);
    },[data])

    return (
        <div className='flex'>
            {
                loading 
                    ? "Loading..." 
                    : categories.map(category => (
                        <div key={category.id} >
                            <h2>{category.attributes.title}</h2>
                            <div>{category.attributes.description}</div>
                            <img src={`${import.meta.env.VITE_APP_URL + category.attributes.image.data.attributes.url}`} alt='' />
                        </div>
                    ))
            }
        </div>
    )
}
