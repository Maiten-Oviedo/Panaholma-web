import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return(
        <section className={styles.home}>
            <h1 className={styles.homeH1}>CERVEZA ARTESANAL</h1>
            <h2 className={styles.homeH2}>Fábrica de cerveza artesanal en Traslasierra, Córdoba</h2>
        </section>
    )
}

export default Home
