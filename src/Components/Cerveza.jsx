import React from 'react';
import styles from './Cerveza.module.css';

const Cerveza = ( { key, nombre, descripcion, grados, img } ) => {
  return (
    <article className={styles.cervezaCard}>
        <img className={styles.cervezaImg} src={img} alt={nombre} />
        <h2>{nombre}</h2>
        <p><strong className={styles.cervezaStrong}>Descripción:</strong> {descripcion}</p>
        <p><strong className={styles.cervezaStrong}>Grado de alcohol:</strong> {grados}</p>
    </article>
  )
}

export default Cerveza
