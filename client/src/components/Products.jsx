import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import StoreContext from '../hooks/storeContext';
import './Products.css'
import { addToCart } from '../reddux/cartReducer';
import { useDispatch } from 'react-redux';

export default function Products() {

    const [products, setProducts] = useState([]);
    const {filter} = useContext(StoreContext)
    const {data, loading, error} = useFetch(filter)
    const dispatch = useDispatch()

    useEffect(()=>{
        data && setProducts(data);
    },[data])

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
                            <button 
                                className='product-btn' 
                                onClick={()=>dispatch(addToCart({
                                    // This is payload
                                    id: product.id,
                                    title: product.attributes.title,
                                    desc: product.attributes.desc,
                                    price: product.attributes.price,
                                    image: product.attributes.image.data.attributes.url

                                }))}  
                            >add to cart</button>
                        </div>
                    ))
            }
        </div>
    )
}
