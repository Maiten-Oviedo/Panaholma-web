import React, { useState } from 'react'
import { Link } from "react-scroll";
import styles from './NavBar.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const links = [
        { 
            id: 1,
            link: "Cervezas" 
        },
        { 
            id: 2, 
            link: "Nosotros" 
        },
    ];
  return (
    <nav className={!navBarOpen === true ? styles.navBar : styles.navOpen}>
        <div className='logo'>
            <p>
                Panaholma | Cervezas
            </p>

            {!navBarOpen ? (<AiOutlineMenu onClick={() => {setNavBarOpen(!navBarOpen)}} size={25}/>)
            : (<IoMdClose onClick={() => {setNavBarOpen(!navBarOpen)}} size={25} />)}
        </div>
        
        {navBarOpen && (
            <ul>
                {links.map(link => (
                    <div>
                        <Link>{link.link}</Link>
                    </div>
                ))}
            </ul>
        )}
    </nav>
  )
}

export default NavBar
