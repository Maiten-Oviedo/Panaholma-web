import React from 'react';
import styles from './Cervezas.module.css';
import  Cerveza  from '../Components/Cerveza';

const Cervezas = () => {

    const cervezas = [
        {
            id:1,
            nombre:"La Bodega",
            descripcion:"Lagertipo con un toque de malta y una nota a canela",
            grados:"temperatura:4°C , alcohol:5%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id:2,
            nombre:"Negra Oscura",
            descripcion:"Esta negra es rica en maltas y con un sabor peculiar",
            grados:"temperatura:-3°C , alcohol:7%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id:3,
            nombre:"Ambar Negra",
            descripcion:"Una cerveza amarga pero muy buena.",
            grados:"temperatura:8°C , alcohol:5%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:4,
            nombre:"Cerveza Dulce",
            descripcion:"Sin dudas la más dulce que tenemos, perfecta para paladares exigentes",
            grados:"temperatura:4°C , alcohol:4%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <section id='Cervezas' className={styles.cervezas}>
            <h2 className={styles.cervezasTitle}>NUESTRAS CERVEZAS</h2>
            <h3 className={styles.cervezasP}>DESDE 1999</h3>
            <ul className={styles.cervezasList}>
                {cervezas.map((cerveza)=>{
                    return(
                        <Cerveza
                            key={cerveza.id}
                            nombre={cerveza.nombre}
                            descripcion={cerveza.descripcion}
                            grados={cerveza.grados}
                            img={cerveza.imagen}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default Cervezas
