import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetails.css';




const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(key => key.key === productKey);
    // console.log(product);
    return (
        <div>
            <Product showAddButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;