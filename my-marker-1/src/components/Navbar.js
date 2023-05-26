import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            Inmarsat Nata
        </div>
        <ul className='navbar-menu'>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/chart">chart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar