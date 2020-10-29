// Packages
import Image from 'next/image';

// Styles
import styles from './card.module.css';

const Card = ({ title, cover_photo }) => {
    return (
        <div className={styles.card}>
            <span className={styles.link}>{title}</span>
            <Image 
                className={styles.cover} 
                src={cover_photo.urls.full} 
                width={cover_photo.width} 
                height={cover_photo.height} 
                alt={title} 
            />
        </div>
    )
}

export default Card;
