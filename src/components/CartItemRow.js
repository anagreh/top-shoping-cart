import { useState } from 'react';
import '../styles/CartItemRow.css'

export default function CartItemRow(props) {
  const CartItem = props.cartItem;
  const product = props.cartItem.product;

  // const [quantityValue , setQuantityValue] = useState(CartItem.quantity)

  const handleQuantityValueChange = (e) => {
    // setQuantityValue(e.target.value)
    props.handleQuantityChange(product , e.target.value)
  }

  return(
    <tr className="cart-item">
      <td><img src={product.imgSrc} alt='icon'></img></td>
      <td>{product.name}</td>
      <td>
        <input type='number' value={CartItem.quantity} onChange={handleQuantityValueChange}></input>
      </td>
      <td>{product.price}</td>
      <td>{product.price * CartItem.quantity}</td>
    </tr>
  )
}