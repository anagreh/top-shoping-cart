import ProductCard from "./ProductCard";
import '../styles/ShopBody.css'
import { products } from '../products'


export default function ShopBody(props) {

  return(
    <div className="shop-body">
      {products.map(item => {
        return (
        <ProductCard  
          key={item.name} 
          item={item} 
          handleAddCartItems={props.handleAddCartItems}
        ></ProductCard>
        )
      })}

    </div>
  )
}