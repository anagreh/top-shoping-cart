import '../styles/ProductCard.css'

export default function ProductCard(props) {
  const item=props.item

  const handleClickAdd = () => {
    props.handleAddCartItems(item)
  }

  return(
    <div className='product-card'>
      <div className='img-container'>
        <img src={item.imgSrc} alt={item.name}></img>
      </div>
      <div className="info">
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <button onClick={handleClickAdd}>+</button>
      </div>
    </div>
  )
}