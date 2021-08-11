import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, wholePrice, stock, key} = props.product;

    return (
        <div className="d-flex my-3 border-bottom align-items-center">
            <div className="me-3">
                <img src={img} alt="product" />
            </div>
            <div>
                <h4><Link to={`/product/${key}`}>{name}</Link></h4>
                <p>By: <small>{seller}</small></p>
                <p>Price: <small>${wholePrice}</small></p>
                <p>only {stock} left in stock - order soon</p>
                {
                  props.showAddButton &&  <button onClick={()=>props.handleProduct(props.product)}  className="btn btn-primary mb-3"><FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;