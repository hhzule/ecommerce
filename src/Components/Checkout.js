import React from 'react'
import './Checkout.css';
import banner from '../images/checkout.png';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Checkout.css';

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src={banner} alt='' />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}


                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
