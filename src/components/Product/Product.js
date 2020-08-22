import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



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
                <button onClick={() => props.handleAddProduct(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} />  Add To Cart</button>
            </div>

        </div>
    );
};

export default Product;