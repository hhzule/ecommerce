import { Link } from 'react-router-dom';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {

    }

    const handleChange = e => {

    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout(<Link to='./checkout'>{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>d add</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>r lane</p>
                        <p> lonsin</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>review item</h3>
                    </div>
                    <div className="payment__items">
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
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange} />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
