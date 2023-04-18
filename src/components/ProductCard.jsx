import React from 'react'
import './ProductCard.css'
import Iphone12 from '../assets/Iphone.png'
import StarIcon from '../assets/icon/StarIcon.svg'

function ProductCard() {
    return (
        <div className="Product_card">
            <div className="Prooduct_card_container">
                <div className="Product_card_img">
                    <img src={Iphone12} alt="" />
                </div>
                <div className="product_card_info">
                    <h3>Apple iPhone 13 (128GB) - Blue</h3>
                    <div className="product_card_body">
                        <div className="product_card_rating">
                            <img src={StarIcon} alt="" />
                            <img src={StarIcon} alt="" />
                            <img src={StarIcon} alt="" />
                            <img src={StarIcon} alt="" />
                            <img src={StarIcon} alt="" />
                        </div>
                        <div className="product_card_price">
                            <h4>$1,222.99</h4>
                        </div>
                    </div>
                </div>
          
                <div className="product_card_btn">
                   <button className='product_card_btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
