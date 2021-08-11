import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    
    };

    let shipping = 0;

    if(total > 35){
        shipping = 0;
    }else if(total > 12){
        shipping = 4.99
    }else if(total > 0){
        shipping = 12.99
    };

    const tex = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tex)).toFixed(2);
    const  formatNumber = (num) =>{
        const precition = num.toFixed(2);
        return Number(precition);
    }
    
    
    return (
        <div className="ms-3">
            <h3 className="text-center">Order Summary</h3>
            <p className="text-center">Items ordered: {props.cart.length}</p>
            <p>Items: ${formatNumber(total)}</p>
            <p>Shipping & Handling:	<small> ${shipping}</small></p>
            <p>tax + vat: <small> ${tex}</small></p>
            <h4>Order Total: ${grandTotal}</h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;