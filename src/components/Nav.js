import { Link } from "react-router-dom"
import "../styles/Nav.css"

export default function Nav(props) {
  const numbOfProductInCart = props.cartItems.length;
  return (
    <nav>
      <Link to="top-shoping-cart/" >Home</Link>
      <Link to="top-shoping-cart/shop" >Shop</Link>
      <Link to="top-shoping-cart/cart" >
        Cart <div className='number-cart-items'>{numbOfProductInCart}</div>
      </Link>
    </nav>
  )
}