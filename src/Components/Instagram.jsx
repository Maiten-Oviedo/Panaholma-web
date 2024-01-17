import React from 'react'
import { FaInstagram } from "react-icons/fa";
import  styles  from './Instagram.module.css';

const Instagram = () => {
  return (
    <a href='https://www.instagram.com/panaholma_cerveza' target='_blank' rel='noopener noreferrer' className={styles.button}><FaInstagram />
    </a>
  )
}

export default Instagram
