// import React from 'react'useEffect
import { useState} from 'react'

import { Link} from 'react-router-dom'
// import { Link, NavLink } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks} from '../constants/index'
import { logo, menu, close  } from '../assets'
// import { logo} from '../assets'

// visit logo.com title indexhtml link relicon lien du logo(27)

const Navbar = () => {
  const [active, SetActive] = useState("") //indiquer quel onglet est actif
  const [toggle, setToggle] = useState(false) //afficher le menu de la navbar sur mobile et changer image (hamb/croix)
  return (
    <nav // container de la navbar
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
            onClick={() => {
              SetActive("")
              window.scrollTo(0, 0)// revoir et chercher
            }}
          >
            <img src={logo} alt="logo"// changer voir logo.com
                className="w-9 h-9 object-contain"
            />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Ludovix &nbsp;<span className='sm:block hidden'>|Javascript Developper</span>
            </p>
          </Link>
          {/* unicode pour espace/ pour petits ecrans effacer le span */}{/* chercher gap */}
          
          
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"}
                    hover:texte-white text-[-18px] font-medium cursor pointer`}
                  onClick={() => SetActive(link.title)}>
                <a href={`#${link.id}`}> {link.title}</a>
                {/* {console.log(link.id)} */}
              </li>
            ))}            
          </ul>   

          {/* --   Navbar for mobile   --          */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* faire apparaitre le menu au click */}
            {/* si le menu est toggle affiche limage de close (croix), sinon limage de menu(hamburger) */}
            <img src={toggle? close : menu} alt="menu" 
                 className='w-[28px] h-[28px] object-contain cursor-pointer'
                 onClick={() => setToggle (!toggle)}
            />
            {/* au clik inversement de l'état du menu */}
            <div className={`${!toggle ? 'hidden' : 'flex'}
                          p-6 black-gradient absolute top-20
                          right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                          >
               {/* voir tailwind , rounded */}
               <ul className='list-none flex justify-end items start flex-col gap-4'>
                {/* on va mapper sur navlinks importé depuis constant pour afficher les onglets de la navbar dans la liste */}
            {navLinks.map((link) => (
              <li key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"}
                    font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle) // open/close menu
                    SetActive(link.title)
                  }}
                  >
                <a href={`#${link.id}`}> {link.title}</a>
                {/* # ancre de navigation liée à l'ID */}
                {/* {console.log(link.id)} */}
              </li>
            ))}            
          </ul>   
             </div> 
          </div>
        </div>
    </nav>
  )
}

export default Navbar