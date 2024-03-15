import React, { useContext, useEffect } from 'react';
import { cartToggle } from '../store/CartToggle';
import "../cart/cartItem.css"
import CartItemButton from './CartItemButton';

const CartItem = () => {
  const cartCtx = useContext(cartToggle);
  const { items} = cartCtx.state;

  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0;

  items.forEach((item) => {
    switch (item.id) {
      case 'm1':
        c1++;
       
        break;
      case 'm2':
        c2++;      


        break;
      case 'm3':
        c3++;


        break;
      case 'm4':
        c4++;

        break;
      default:
        break;
    }
  });

const singleItems=new Set(items.map((item)=>item.name))

const singleItemsArray= Array.from(singleItems)

  return (
    <>
      {singleItemsArray.map((item,i)=>(
             <li className="cartListItem"key={i}> <div>{item}
              {item=="Sushi" && <span id="22.99" className='itemCount'>x{c1}</span>}
              {item=="Schnitzel" && <span id="16.5" className='itemCount'>x{c2}</span>}
              {item=="Barbecue Burger" && <span id="12.99" className='itemCount'> x{c3}</span>}
              {item=="Green Bowl" && <span id="18.99" className='itemCount'>x{c4}</span>}
              </div>
              <CartItemButton />
             </li>
      ))}
    </>
  );
};

export default CartItem;
