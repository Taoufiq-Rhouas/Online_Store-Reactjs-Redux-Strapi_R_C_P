import React, { Fragment, useEffect, useState } from 'react'

// import React, { Fragment, useEffect, useState , useContext } from 'react'
import useFetch from '../hooks/useFetch';

import './Products.css'
import Checkbox from './Checkbox';

// import StoreContext from '../hooks/storeContext';

export default function Categories() {

    const [categories, setCategories] = useState([])

    const {data, loading, error} = useFetch("/categories?populate=*");

    // const {filter} = useContext(StoreContext)

    useEffect(()=>{
        // data && console.log(data) = console.log(data) Only if data is not null
        data && setCategories(data);
        console.log(categories);
    },[data])

    return (
        <div className='categories'>
            {
                loading 
                    ? "Loading..." 
                    : categories.map(category => (
                        // <div key={category.id} >
                        //     <h2>{category.attributes.title}</h2>
                        //     <div>{category.attributes.description}</div>
                        //     <img src={`${import.meta.env.VITE_APP_URL + category.attributes.image.data.attributes.url}`} alt='' />
                        // </div>
                        
                        <Fragment key={category.id}>
                            <Checkbox category={category} />
                        </Fragment>
                    ))
            }
        </div>
    )
}
