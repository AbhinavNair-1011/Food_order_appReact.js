import React, { useContext } from 'react'
import ReactDOM from "react-dom"
import CartButton from '../cart/CartButton'
import "../header/header.css"
import { cartToggle } from '../store/CartToggle'
import Cart from '../cart/Cart'

const Header = () => {
  
  const cartPortal=  ReactDOM.createPortal(<Cart />, document.getElementById("cartModal"));

  const cartCtx = useContext(cartToggle)

    
  return (
    <header>
        
        <h1 className='header-title'>Food Order App</h1>
       <CartButton/>
       {cartCtx.isCartOpen && cartPortal}

    </header>
  )
}

export default Header