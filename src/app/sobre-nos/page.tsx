import Image from 'next/image'
import styles from './styles.module.css';
import data from './data';

export default function SobreNos() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sobre nos</h1>
            <div  className={styles.group}>
                {data.people.map(({title, name, description, image}) => (
                    <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <Image className={styles.picture} src={image} width={150} height={150} alt="Paulo Vinicius, fundador e CEO" />
                    </div>
                    <div className={styles.subtitle}>{title}</div>
                    <div className={styles.title}>{name}</div>
                    <p className={styles.description}>{description}</p>
                </div>
                ))}
            </div>
        </div>
    )
}