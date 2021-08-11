import React, { useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd=> pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            return product;

        });
        setCart(previousCart);
       
    },[]); 

    const handleProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=>pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        
        addToDatabaseCart(product.key,count);
    };


    return (
        <div className="container shop-container">
            <div className="product-container overflow-hidden">
               
                    {
                        products.map((product) => <Product showAddButton={true} product={product} handleProduct={handleProduct} key={product.key}></Product>)
                    }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review"><button className="btn btn-primary">review your order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;