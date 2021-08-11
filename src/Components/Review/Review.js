import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import gif from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    const removeProduct = (removedKey) => {
        const newCart = cart.filter(pd => pd.key !== removedKey);
        setCart(newCart);
        removeFromDatabaseCart(removedKey);
    };


    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts)
    }, []);

    const placeOrder = () => {
        setCart([]);
        setOrderPlace(true);
        processOrder();
    };

    let thankYou;
    if (orderPlace) {
        thankYou = <img src={gif} alt="gif" />
    }

    return (
        <div>
            <div className="container shop-container">
                <div className="product-container overflow-hidden">
                    {
                        cart.map(pd => <ReviewItem key={pd.key} product={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>)
                    }
                    {
                        thankYou
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button className="btn btn-primary" onClick={placeOrder}>place order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;