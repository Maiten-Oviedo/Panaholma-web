import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import styles from './NavBar.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useScrollPosition } from '../Hooks/scrollPosition';

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = ()=>{
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    } 

    useEffect(()=>{
        window.addEventListener('resize', detectDimension);
        windowDimension.width > 800 && setNavBarOpen(false);
        return()=>{
            window.removeEventListener('resize', detectDimension)
        }
    },[windowDimension])

    const links = [
        { 
            id: 1,
            link: "Cervezas" 
        },
        { 
            id: 2, 
            link: "Nosotros" 
        },
        {
            id:3,
            link:"Contacto",
        },
        {
            id:4,
            link:'DondeEncontrarnos',
        },
    ];

    const scrollPosition = useScrollPosition;

  return (
    <nav className={navBarOpen ? styles.navOpen : scrollPosition > 0 ? styles.navOnScroll : styles.navBar}>
        <div className={styles.logo}>
            <p style={{margin: 8}}>
                Panaholma | Cervezas
            </p>

            {!navBarOpen && windowDimension.width < 800 ? (<AiOutlineMenu onClick={() => {setNavBarOpen(!navBarOpen)}} size={25}/>)
            :( windowDimension.width < 800 && (<IoMdClose onClick={() => {setNavBarOpen(!navBarOpen)}} size={25} />))}
        </div>
        
        {navBarOpen && (
            <ul className={styles.itemsMenu}>
                {links.map(e => (
                    <li key={e.id}>
                        <Link   
                        onClick={() => {setNavBarOpen(setNavBarOpen(false))}}
                        to={e.link}
                        smooth
                        duration={500}
                        className={styles.navLi}
                        >{e.link === "DondeEncontrarnos" ? "DONDE ENCONTRANOS" : e.link.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        )}
        {windowDimension.width > 800 && (
            <ul className={styles.itemsMenu}>
                {links.map(e => (
                    <li key={e.id}>
                        <Link   
                        onClick={() => {setNavBarOpen(setNavBarOpen(false))}}
                        to={e.link}
                        smooth
                        duration={500}
                        className={styles.navLi}
                        >{e.link === "DondeEncontrarnos" ? "DONDE ENCONTRANOS" : e.link.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        )}
    </nav>
  )
}

export default NavBar
