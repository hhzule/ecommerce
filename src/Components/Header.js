import React from 'react'
import "./Header.css";
import logo from '../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';


const Header = () => {

    const [state, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='logo' /></Link>
            <div className="header__search">

                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <Link to='/login'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello Guest </span>
                        <span className='header__optionLineTwo'>Sign In </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your </span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className='header__optionLineTwo header__basketCount'>{state.basket?.length}</span>
                    </div>
                </Link>



            </div>

        </div>
    )
}

export default Header
