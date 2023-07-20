// import React from 'react'useEffect
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
// import { Navlinks} from '../constants'
import { logo } from '../assets'
// import { logo, menu, close } from '../assets'

// visit logo.com title indexhtml link relicon lien du logo(27)

const Navbar = () => {
  const [active, SetActive] = useState("")
  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0
        z-20 bg-primary
      `}
     > 
        <div className='w-full flex justify-between 
        items-center max-w-7xl mx-auto'>
          <Link
            to="/"
            className="flex items-center gap-2"
            onCick={() => {
              SetActive("")
              window.scrollTo(0, 0)
            }}
          >
            <img src={logo} alt="logo"
                className="w-9 h-9 object-contain"
            />
            <p className='text-white text-[18px] font-bold cursor-pointer'>Ludovix
              <span className='sm:block hidden'> |Javascript Developper</span></p>
          </Link>

        </div>
    </nav>
  )
}

export default Navbar