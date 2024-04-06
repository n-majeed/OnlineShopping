import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import './navbar.css'
function Navbar(){

    return(<>
          <nav className='main_nav'>
      {/*logo*/}
        <div className='logo'>  
          <h1>Euphoria</h1>
        </div>
        {/*Links*/ }
        <div className='menu-link'>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Combos</a></li>
          <li><a href="#">Joggers</a></li>
        </ul>
        </div>
{/* search bar*/}
<div><input type="text"></input></div>
  {/*icon buttons */}
  <div className='iconButtonDesktop'>
<ul>
  <li><button><CiHeart /></button></li>
  <li><button><GoPerson/></button></li>
  <li><button><CiShoppingCart /></button></li>
</ul>
  </div>      
      </nav>
    
    </>)
    }
export default Navbar;