// Packages
import Image from 'next/image';

import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
           <Image
              priority={true} 
              src="/retro.jpg" 
              alt="retro" 
              width={2400} 
              height={1600}  
           />
        </div>
    )
}

export default Banner;
