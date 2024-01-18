import React from 'react';
import styles from './Cerveza.module.css';

const Cerveza = ( { key, nombre, descripcion, grados, img } ) => {
  console.log(img)
  return (
    <li key={key} className={styles.cervezaCard}>
        <img className={styles.cervezaImg} src={img} alt={nombre} />
        <div className={styles.cervezaContainer}>
          <h2 className={styles.cervezaH2}> {nombre}</h2>
          <p className={styles.cervezaInfo}>{grados}</p>
          <p className={styles.cervezaDesc}> {descripcion}</p>
          
        </div>
    </li>
  )
}

export default Cerveza
