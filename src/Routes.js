import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartBody from "./components/CartBody";
import HomeBody from "./components/HomeBody";
import Nav from "./components/Nav";
import ShopBody from "./components/ShopBody";

export default function Routes(){
  const [cartItems , setCartItems] = useState([])
  // { itemId: 1, product: products[0], quantity: 2 },
  
  const handleAddCartItems = (product) => {
    const index = cartItems.findIndex(item => item.itemId === product.id)
    if(index >= 0){
      setCartItems([
        ...cartItems.slice(0,index),
        {itemId: product.id, product: product, quantity: cartItems[index].quantity +1 },
        ...cartItems.slice(index +1)
      ])
    }else {
      setCartItems([
        ...cartItems,
        { itemId: product.id, product: product, quantity: 1 }
      ])
    }
  }

  const handleQuantityChange = (product,quantity) => {
    if(quantity < 0 )return;
    const index = cartItems.findIndex(item => item.itemId === product.id)
    if(index >= 0){
      setCartItems([
        ...cartItems.slice(0,index),
        {itemId: product.id, product: product, quantity: quantity},
        ...cartItems.slice(index +1)
      ])
    }else {
      setCartItems([
        ...cartItems,
        { itemId: product.id, product: product, quantity: quantity }
      ])
    }
  }

  return(
    <BrowserRouter>
      <Nav cartItems ={cartItems} handleAddCartItems={handleAddCartItems}/>
      <Switch>
        <Route exact path="/" component={HomeBody}></Route>
        <Route path="/shop">
          <ShopBody cartItems ={cartItems} handleAddCartItems={handleAddCartItems} />
        </Route >
        <Route path="/cart">
          <CartBody cartItems ={cartItems} handleQuantityChange={handleQuantityChange} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}