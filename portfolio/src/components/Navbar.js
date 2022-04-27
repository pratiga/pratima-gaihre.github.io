import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='nav-center'>
    this is
    {/* <img src={logo} alt='sanu db logo' className='logo' /> */}
    <ul className='nav-links'>
    <li><a href='#'>home</a></li>
    <li><a href='#'>about</a></li>
    <li><a href='#'>contact</a></li>
    </ul>
    </div>
    </nav>
  )
}

export default Navbar