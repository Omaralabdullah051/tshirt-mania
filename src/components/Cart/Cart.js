import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1.Element variable
    //2.ternary operator (condition ? true : false)
    //3.&& Operator (shorthand)
    //4.|| OPerator (shorthand)
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Ohh Kipta, khoroch kor</h5>
            <p>kinos na ken!!</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }


    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(TShirt => <p>
                    {TShirt.name}
                    <button onClick={() => handleRemoveFromCart(TShirt)}>Remove Item</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>Yay! you are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Kepp adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;