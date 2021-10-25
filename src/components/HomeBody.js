import { Link } from "react-router-dom";
import restHomeImg from "../asset/img/place.PNG"
import '../styles/HomeBody.css'

export default function HomeBody(){
return (
  <div className="home-body">
    <div className='overview'>
    <h1>Welcome to Tornado</h1>

    <Link to='/shop'>Shop</Link>

    </div>

      <img src={restHomeImg} alt="restaurant img"></img>
    {/* <div className='img-container'>
    </div> */}
    {/* <div className='fill'>h</div> */}
  </div>
)
}