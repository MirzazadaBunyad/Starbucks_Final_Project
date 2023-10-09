import React from 'react'
import Navbar from '../components/UI/Navbar'

function Header(props) {
  return (
    <header {...props}>
        <Navbar/>
    </header>
  )
}

export default Header