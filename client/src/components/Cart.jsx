import { useState } from 'react';
import './Cart.css';
import {FaShoppingBasket} from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Cart() {

    const [cartList, setCartList] = useState(false);

    const showCartList = () => {
        cartList ? setCartList(false) : setCartList(true)
    }

    const products = useSelector(state => state.cart.products)
    console.log('products redux : ====================================');
    console.log(products);
    console.log('====================================');

    return (
        <div className='cart' >
            <div className="cart-icon"
                onClick={showCartList}
            >
                <FaShoppingBasket />
            </div>
            <div className="cart-badge">5</div>

            {
                cartList
                ?(
                    <ul className="cart-list">
                        <li className="cart-item"><img src="http://localhost:1337/uploads/men_03_3e8fa22f36.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Classic sprint</span><span className="cart-item-price">120$</span></li>
                        <li className="cart-item"><img src="http://localhost:1337/uploads/men_02_84653ed278.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Air Force 1 X</span><span className="cart-item-price">90$</span></li>
                        <li className="cart-item"><img src="http://localhost:1337/uploads/women_01_a17b4a253c.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Green Jacket</span><span className="cart-item-price">75$</span></li>
                        <li className="cart-item"><img src="http://localhost:1337/uploads/kid_01_dc19d08cc5.jpg" alt="" className="cart-item-image" /><span className="cart-item-title">Classic Dress</span><span className="cart-item-price">45$</span></li>
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
