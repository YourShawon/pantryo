import React from 'react'
import MobileNav from './MobileNav'
import RecipeSearch from './recipe-search'

const Navbar = () => {
  return (
    <div>
      <nav className='hidden md:block'>
        <RecipeSearch />
      </nav>

      <MobileNav />
    </div>
  )
}

export default Navbar