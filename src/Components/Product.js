import React from 'react'
import './Product.css';

const Product = () => {
    return (
        <div className='product'>
            <div className="product__info">
                <p>Title</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>11</strong>
                </p>
            </div>
        </div>
    )
}

export default Product
