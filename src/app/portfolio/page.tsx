import styles from './styles.module.css'
import residencesThumbs from './assets/thumbnails/residencias'
import Image from 'next/image'


function GalleryItem({
    src, alt = 'alt', width, height,
}: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}) {
    return (<div className={styles.wrapper}>
        <Image
            className={styles.image}
            src={src}
            alt={alt}
            height={150}
            width={150}
        />
    </div>)
}

export default function Portfolio() {

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Portfolio</h1>
            <div className={styles['gallery-group']}>
                {residencesThumbs.map(thumb => <GalleryItem src={thumb.src} key={thumb.src} />)}
            </div>
        </div>
    )
}