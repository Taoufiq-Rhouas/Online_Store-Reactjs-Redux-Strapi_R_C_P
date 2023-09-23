import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

import './Products.css'

export default function Products() {

    const [products, setProducts] = useState([])

    const {data, loading, error} = useFetch("/products?populate=*")

    useEffect(()=>{
        // data && console.log(data) = console.log(data) Only if data is not null
        data && setProducts(data);
    },[data])

    return (
        <div className='flex'>
            {
                loading 
                    ? "Loading..." 
                    : products.map(product => (
                        <div key={product.id} >
                            <h2>{product.attributes.title}</h2>
                            <div>{product.attributes.desc}</div>
                            <div>{product.attributes.price}</div>
                            <img src={`${import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url}`} alt='' />
                        </div>
                    ))
            }
        </div>
    )
}
