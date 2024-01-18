import React from 'react';
import styles from './Cervezas.module.css';
import  Cerveza  from '../Components/Cerveza';

const Cervezas = () => {

    const cervezas = [
        {
            id:1,
            nombre:"LA BODEGA",
            descripcion:"Lagertipo con un toque de malta y una nota a canela, esta cerveza presenta una armoniosa fusión entre la frescura típica de una lager, la riqueza de la malta que le confiere cuerpo, y un sutil matiz especiado de canela. Un equilibrio cautivador que invita a saborear cada sorbo, donde la malta aporta dulzura y la canela añade una nota intrigante a esta experiencia cervecera única",
            grados:"TEMP:4°C | ALCOHOL:5%",
            imagen:'https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id:2,
            nombre:"NEGRA OSCURA",
            descripcion:"Esta negra es rica en maltas y con un sabor peculiar, revela una profunda complejidad en cada trago. Las maltas dan cuerpo y una rica textura, creando una base robusta que destaca por sus matices tostados y de caramelo. El sabor peculiar, sin embargo, es la estrella, desplegando notas intrigantes que dan un giro único a la experiencia. Un equilibrio entre lo indulgente y lo distintivo, esta cerveza negra se erige como una elección fascinante para aquellos que buscan explorar los límites del sabor cervecero.",
            grados:"TEMP:-3°C | ALCOHOL:7%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id:3,
            nombre:"AMBAR NEGRA",
            descripcion:"Una cerveza amarga pero muy buena. Con un sabor a frutas exóticas, esta creación cautiva con su audaz perfil. La amargura inicial, intensa y firme, da paso a una complejidad sorprendente con la llegada de las frutas exóticas. Notas vibrantes de mango y maracuyá dan una dimensión fresca y tropical a cada sorbo, equilibrando magistralmente la intensidad inicial. Esta cerveza se convierte en una experiencia sensorial que desafía las expectativas, demostrando que la amargura puede ser la puerta de entrada a un mundo de sabores exquisitos.",
            grados:"TEMP:8°C | ALCOHOL:5%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:4,
            nombre:"CERVEZA DULCE",
            descripcion:"Sin dudas la más dulce que tenemos, perfecta para paladares que buscan una experiencia de cerveza con indulgencia. Esta cerveza despliega una dulzura exquisita que acaricia el paladar con cada sorbo. Su perfil envolvente presenta notas de caramelo y miel que se entrelazan armoniosamente, creando una sensación reconfortante y placentera. Una elección ideal para aquellos que buscan una experiencia cervecera que va más allá de lo convencional, ofreciendo un deleite dulce que eleva el disfrute de cada momento.",
            grados:"TEMP:4°C | ALCOHOL:4%",
            imagen:"https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <section id='Cervezas' className={styles.cervezas}>
            <h2 className={styles.cervezasTitle}>NUESTRAS CERVEZAS</h2>
            <h3 className={styles.cervezasH3}>DESDE 1999</h3>
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
