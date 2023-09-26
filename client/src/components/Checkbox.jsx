import { useContext, useEffect, useState } from 'react';
import './Checkbox.css'

import qs from "qs";

import StoreContext from '../hooks/storeContext';


export default function Checkbox({category}) {

    // const {setFilter} = useContext(StoreContext);
    const {setFilter , selectedCategories, setSelectedCategories} = useContext(StoreContext);

    // const [selectedCategories, setSelectedCategories] = useState([]);

    // useEffect(()=>{
    //     console.log('selectedCategories :====================================');
    //     console.log(selectedCategories);
    //     console.log('====================================');
    // },[selectedCategories])

    useEffect(()=>{
        const query = qs.stringify({
            filters: {
                categories: { id: {$in: selectedCategories}},
            },
        });
        setFilter(import.meta.env.VITE_API_URL + "/products?populate=*&" + query)
    },[selectedCategories])

    const handleFilterCategory = (e) => {
        // setFilter(e.target.checked)
        // setFilter("http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=" + e.target.dataset.category)

        // console.log(e.target.dataset.category);
        // console.log(e.target.checked);

        const selectedID = e.target.dataset.category
        const isChecked = e.target.checked

        setSelectedCategories(selectedCategories => {
            if(isChecked) return [...selectedCategories, selectedID]
            // This Is else
            return selectedCategories.filter(id => id !== selectedID)
        })

        // const query = qs.stringify({
        //     filters: {
        //         categories: {
        //             id: {
        //                 $in: selectedCategories
        //             }
        //         }
        //     }
        // })
        // setFilter("http://localhost:1337/api/products?populate=*&" + query)

        
    }

    return (
        <>
            <div className='content_check_and_title'>
                {/* <!-- Toggle Button Style 1 --> */}
                <label className="toggler-wrapper style-1">
                    <input 
                        type="checkbox"
                        data-category={category.id}
                        onChange={handleFilterCategory}
                    />
                    <div className="toggler-slider">
                        <div className="toggler-knob"></div>
                    </div>    
                </label>
                {/* <!-- End Toggle Button Style 1 --> */}
                <div className="badge">{category.attributes.title}</div>
            </div>
        </>
    )
}
