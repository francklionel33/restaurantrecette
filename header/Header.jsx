import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation} from 'react-router-dom';
import './header.css'

const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
        <div className='h2-ri-restaurant'>
        <i class="ri-restaurant-2-line"></i>
        <h2>Chef Food</h2>
        </div>
        <nav className='nav-header'>
            <ul>
            <NavLink to="/home" className={window.location.pathname === "/home"? "nav-link-actu" : "nav-link-home"}><li>Home</li></NavLink>
            <NavLink  className="nav-link-home"><li>About</li></NavLink>
            <NavLink  to="/menu/:name" className={window.location.pathname==="/menu/:name"? "nav-link-actu" : "nav-link-home"}><li>Menu</li></NavLink>
            <NavLink className="nav-link-home"><li>Recipes</li></NavLink>
            <NavLink  className="nav-link-home"><li>Contact</li></NavLink>
            </ul>
        </nav>
        <div className='input-search'>
            <input type="text" className='searchInput' placeholder='search  receipts...'/>
            <i class="ri-search-line"></i>
        </div>
        <div className='parent-ri-shopping'>
        <i class="ri-shopping-cart-line"></i>
        </div>
    </div>
  )
}

export default Header