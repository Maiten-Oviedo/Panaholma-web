import React from 'react';
import styles from './Home.module.css';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
    return(
        <section className={styles.home}>
            <h1 className={styles.homeH1}>CERVEZA ARTESANAL</h1>
            <h2 className={styles.homeH2}>Fábrica de cerveza artesanal en Traslasierra, Córdoba</h2>
            <a className={styles.homeA} href="#Cervezas"><p>Ver Cervezas</p> <IoIosArrowDown/></a>
        </section>
    )
}

export default Home
