import CartItemRow from './CartItemRow';
import "../styles/CartBody.css"

export default function CartBody(props) {
  const cartItems = props.cartItems;

  const TotalPrice = cartItems.reduce((prevValue,cartItem) => {
    return prevValue + cartItem.quantity * cartItem.product.price;
  }, 0);

  const cartItemRows = [];
  cartItems.forEach((cartItem) => {
    cartItemRows.push(
      <CartItemRow
        key={cartItem.itemId}
        cartItem={cartItem}
        cartItems ={props.cartItems} 
        handleQuantityChange={props.handleQuantityChange}
      ></CartItemRow>,
    );
  });

  return (
    <div className="cart-body">
    <table className="cart-table">
      <thead>
        <tr>
          <th></th>
          <th>product</th>
          <th>quantity</th>
          <th>Item price</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItemRows}
      </tbody>
      <tfoot>
        <tr>
            <th colSpan="3"> </th>
            <th >Total Price: </th>
            <th> {TotalPrice} </th>
        </tr>
      </tfoot>
    </table>
      <button className='checkout-button'>CHECKOUT</button>
    </div>
  );
}
