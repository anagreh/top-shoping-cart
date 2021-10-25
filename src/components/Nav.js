import { Link } from "react-router-dom"
import "../styles/Nav.css"

export default function Nav(props) {
  const numbOfProductInCart = props.cartItems.length;
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/shop" >Shop</Link>
      <Link to="/cart" >
        Cart <div className='number-cart-items'>{numbOfProductInCart}</div>
      </Link>
    </nav>
  )
}