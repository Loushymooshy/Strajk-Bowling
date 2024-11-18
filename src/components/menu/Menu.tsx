// create a menu icon that will navigate to the nav page when clicked

import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.css'

const Menu = () => {
    const navigate = useNavigate();
  
    const handleMenuIconClick = () => {
      navigate('/nav'); 
    };
  
  return (
    <div className={styles.menuContainer}>
        <figure className={styles.menuIcon} onClick={handleMenuIconClick}>
           <div className={`${styles.line} ${styles.one}`}></div>
           <div className={`${styles.line} ${styles.two}`}></div>
           <div className={`${styles.line} ${styles.three}`}></div>
        </figure>
    </div>
  )
}

export default Menu