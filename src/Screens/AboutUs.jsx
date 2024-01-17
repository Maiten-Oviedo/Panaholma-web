import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id='Nosotros' className={styles.aboutUs}>
      <h1 className={styles.aboutUsH1}>SOBRE NOSOTROS</h1>
      <h3 className={styles.aboutUsH3}>MINA CLAVERO, CÓRDOBA</h3>
      <p className={styles.aboutUsP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas officia, est nobis repellendus molestiae eligendi fugiat, inventore consequuntur distinctio, vel iusto aut ab. Voluptatum atque excepturi aliquid minus. Quia.
      </p>
    </section>
  )
}

export default AboutUs