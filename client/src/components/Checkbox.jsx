import { useContext } from 'react';
import './Checkbox.css'

import StoreContext from '../hooks/storeContext';


export default function Checkbox({category}) {

    const {setFilter} = useContext(StoreContext)

    const handleFilterCategory = (e) => {
        // setFilter(e.target.checked)
        setFilter("http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=" + e.target.dataset.category)
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
