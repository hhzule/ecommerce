import React from 'react';
import './Home.css';
import banner from '../images/banner.jpg'
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src={banner} alt='banner' />
                <div className="home__row">
                    <Product />

                </div>
            </div>
        </div>
    )
}

export default Home
