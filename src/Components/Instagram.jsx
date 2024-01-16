import React from 'react'
import { FaInstagram } from "react-icons/fa";
import  styles  from './Instagram.module.css';

const Instagram = () => {
  return (
    <button className={styles.button} type="button"><FaInstagram />
    </button>
  )
}

export default Instagram
