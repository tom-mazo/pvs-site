import Image from 'next/image'
import styles from './styles.module.css';
import data from './data';

export default function SobreNos() {
    return (
        <div>
            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {data.people.map(({title, name, description, image}) => (
                    <div className="flex flex-col items-center p-2 mb-5 max-w-72">
                    <div>
                        <Image className={styles.picture} src={image} width={150} height={150} alt="Paulo Vinicius, fundador e CEO" />
                    </div>
                    <div className="text-pvs-beige text-xl text-center mb-2">{title}</div>
                    <div className="text-pvs-gold text-2xl text-center mb-2">{name}</div>
                    <p className="text-pvs-beige text-center pl-2 pr-2">{description}</p>
                </div>
                ))}
            </div>
        </div>
    )
}