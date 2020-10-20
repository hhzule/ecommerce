import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';


const Product = ({ id, title, img, price, rating }) => {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
       
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                img,
                price,
                rating
            }

        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><span>🌟 </span></p>
                    ))}


                </div>
            </div>
            <img src={img} alt='productImage' />
            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
