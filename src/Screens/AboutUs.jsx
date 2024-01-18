import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id='Nosotros' className={styles.aboutUs}>
      <h1 className={styles.aboutUsH1}>SOBRE NOSOTROS</h1>
      <h3 className={styles.aboutUsH3}>MINA CLAVERO, CÓRDOBA</h3>
      <div className={styles.aboutUsContainer}>
        <p className={styles.aboutUsP}>
          Somos una empresa familiar que se fundó en el año 2004. 
          Desde entonces hemos trabajado duro para construir nuestra imagen de marca.
          Nuestro compromiso con la calidad y servicio es lo que nos permite mantener nuestros clientes fieles.
        </p>
        <img className={styles.aboutUsImg} src={require("../Assets/nosotros-img.jpg")} alt="Imagen de nuestra cervecería"/>
      </div>
      
    </section>
  )
}

export default AboutUs