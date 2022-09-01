import React from 'react'
import './CartItem.scss';

const CartItem = ({item}) => {
    const {name, quantity, price, imageUrl} = item;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} * ${price}</span>
      </div>
      
    </div>
  )
}

export default CartItem
