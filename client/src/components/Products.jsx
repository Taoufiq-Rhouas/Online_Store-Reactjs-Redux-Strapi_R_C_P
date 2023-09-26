import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

import StoreContext from '../hooks/storeContext';

import './Products.css'

export default function Products() {

    const [products, setProducts] = useState([]);

    const {filter} = useContext(StoreContext)

    // // S_Comment_1
    // const {data, loading, error} = useFetch("/products?populate=*")
    // // E_Comment_1

    const {data, loading, error} = useFetch(filter)

    useEffect(()=>{
        // data && console.log(data) = console.log(data) Only if data is not null
        data && setProducts(data);
    },[data])

    // useEffect(() => {
    //     console.log(filter);
    // },[filter])

    return (
        <div className='products'>
            {
                loading 
                    ? "Loading..." 
                    : products.map(product => (
                        <div className='product' key={product.id} >
                            <h2 className='product-title' >{product.attributes.title}</h2>
                            <div className='product-price' >{product.attributes.price}</div>
                            <img className='product-image'  src={`${import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url}`} alt='' />
                            <div className='product-desc' >{product.attributes.desc}</div>
                        </div>
                    ))
            }
        </div>
    )
}
