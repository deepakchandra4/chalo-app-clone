import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HideNavbar = ({children}) => {

    const [showNav , setShowNav] = useState(false);

    const location = useLocation();

    useEffect (() => {
        if(location.pathname === '/app-features'){
            setShowNav(false);
        }
        else if(location.pathname === '/app-features/select-trip'){
            setShowNav(false);
        }
        else if(location.pathname === '/app-features/select-product-type'){
            setShowNav(false);
        }else{
            setShowNav(true);
        }
    } , [location])

  return (
    <div>
      {showNav && children}
    </div>
  )
}

export default HideNavbar
