import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt Mania!!</h2>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="/grandpa">GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;