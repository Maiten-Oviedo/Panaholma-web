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
            link: 'Cervezas', 
        },
        { 
            id: 2, 
            link: 'Nosotros', 
        },
        {
            id:3,
            link:'Fábrica',
        },
        {
            id:4,
            link:'DondeEncontrarnos',
        },
        {
            id:5,
            link: 'Contacto'
        }
    ];

    const scrollPosition = useScrollPosition;

  return (
    <nav className={navBarOpen ? styles.navOpen : scrollPosition > 0 ? styles.navOnScroll : styles.navBar}>
        <div className={styles.logo}>
            <img className={styles.logoImg} src={require('../Assets/logo.jpg')} alt="Logo" />

            {!navBarOpen && windowDimension.width < 800 ? (<AiOutlineMenu className={styles.menuIcon} onClick={() => {
                setNavBarOpen(!navBarOpen);
                document.body.style.overflow = 'hidden';
            }} size={25}/>)
            :( windowDimension.width < 800 && (<IoMdClose className={styles.menuIcon} onClick={() => {
                setNavBarOpen(!navBarOpen);
                document.body.style.overflow = '';
                }} size={25} />))}
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
