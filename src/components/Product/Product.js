import React from 'react';
import './Product.css'

const Product = (props) => {
    // const {img, name} =props.product;
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-detail'>
                <h4 className="product-name">{props.product.name}</h4>
                <br />
                <p><small>by : {props.product.seller}</small></p>
                <p>${props.product.price}</p>

                <p><small>Only {props.product.stock} left in stock . Order Soon .</small></p>
            </div>

        </div>
    );
};

export default Product;