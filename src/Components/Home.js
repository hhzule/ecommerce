import React from 'react';
import './Home.css';
import banner from '../images/banner.jpg'
import Product from './Product';
import image from '../images/leanstartup.jpeg'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src={banner} alt='banner' />
                <div className="home__row">
                    <Product
                        title='the lean startup'
                        price={2922}
                        img={image}
                        rating={4}
                    />
                    <Product
                        title='the lean startup'
                        price={2922}
                        img={image}
                        rating={4}
                    />


                </div>
                <div className="home__row">
                    <Product
                        title='the lean startup'
                        price={2922}
                        img={image}
                        rating={4}
                    />
                    <Product
                        title='the lean startup'
                        price={2922}
                        img={image}
                        rating={4}
                    />

                </div>
                <div className="home__row">
                    <Product
                        title='the lean startup'
                        price={2922}
                        img={image}
                        rating={4}
                    />
                    <Product
                        title='the lean startup'
                        price={2922}
                        img={image}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
