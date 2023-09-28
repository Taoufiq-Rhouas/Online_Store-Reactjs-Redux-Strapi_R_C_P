import { useState } from 'react';
import './Cart.css';
import {FaRedoAlt, FaShoppingBasket, FaTrash} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart , resetCart } from '../reddux/cartReducer';

export default function Cart() {

    const [cartList, setCartList] = useState(false);

    const showCartList = () => {
        cartList ? setCartList(false) : setCartList(true)
    }

    const products = useSelector(state => state.cart.products)
    // console.log('products redux : ====================================');
    // console.log(products);
    // console.log('====================================');

    const dispatch = useDispatch()

    return (
        <div className='cart' >
            <div className="cart-icon"
                onClick={products.length > 0 && showCartList}
            >
                <FaShoppingBasket />
            </div>
            <div className="cart-badge">{products.length}</div>

            {
                cartList || products.length > 0
                ?(
                    <ul className="cart-list">
                        {
                            products.map(product => (
                                <li className="cart-item">
                                    <img src={import.meta.env.VITE_APP_URL + product.image} alt="" className="cart-item-image" />
                                    <span className="cart-item-title">{product.title}</span>
                                    <span className="cart-item-price">{product.price}</span>
                                    <span 
                                        className="cart-item-remove"
                                        onClick={()=>dispatch(removeFromCart({
                                            // This is payload
                                            id: product.id,
                                        }))}  
                                    ><FaTrash /> </span>
                                </li>
                            ))
                        }

                        <span 
                            className="cart-reset"
                            onClick={()=>dispatch(resetCart())} 
                        ><FaRedoAlt /> </span>

                        {/* <li className="cart-item"><img src="http://localhost:1337/uploads/men_03_3e8fa22f36.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Classic sprint</span><span className="cart-item-price">120$</span></li>
                        <li className="cart-item"><img src="http://localhost:1337/uploads/men_02_84653ed278.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Air Force 1 X</span><span className="cart-item-price">90$</span></li>
                        <li className="cart-item"><img src="http://localhost:1337/uploads/women_01_a17b4a253c.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Green Jacket</span><span className="cart-item-price">75$</span></li>
                        <li className="cart-item"><img src="http://localhost:1337/uploads/kid_01_dc19d08cc5.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Classic Dress</span><span className="cart-item-price">45$</span></li> */}
                    </ul>
                )
                :("")
            }


            {/* <ul className="cart-list">
                <li className="cart-item"><img src="http://localhost:1337/uploads/men_03_3e8fa22f36.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Classic sprint</span><span className="cart-item-price">120$</span></li>
                <li className="cart-item"><img src="http://localhost:1337/uploads/men_02_84653ed278.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Air Force 1 X</span><span className="cart-item-price">90$</span></li>
                <li className="cart-item"><img src="http://localhost:1337/uploads/women_01_a17b4a253c.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Green Jacket</span><span className="cart-item-price">75$</span></li>
                <li className="cart-item"><img src="http://localhost:1337/uploads/kid_01_dc19d08cc5.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Classic Dress</span><span className="cart-item-price">45$</span></li>
            </ul> */}
        </div>
    )
}
