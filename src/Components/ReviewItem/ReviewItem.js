import React from 'react';
import './ReviewItem.css';


const ReviewItem = (props) => {
    // console.log(props);
    const {name,quantity,key,price} = props.product;
    return (
        <div className="review-item">
             <h4>Name: {name}</h4>
            <p>Quantity: {quantity}</p> 
            <p>Price: <small>${price}</small></p>
            <button className="btn btn-primary" onClick={()=>props.removeProduct(key)}>review</button>
        </div>
    );
};

export default ReviewItem;