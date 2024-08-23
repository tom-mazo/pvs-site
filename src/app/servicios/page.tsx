import styles from './styles.module.css';
import data from './data';

function Card({ item }: { item: { Icon: ({ color }: { color?: string; }) => JSX.Element, title: string; description: string;}}) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}><item.Icon /></div>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.description}>{item.description}</p>
        </div>
    )
}

export default function Servicios() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.header} lg:hidden`}>Servicios</h1>
            <div className={styles.group}>
                {data.map(item => <Card item={item} />)}
            </div>
        </div>
    )
}