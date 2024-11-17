//Made with typescript, where every state, props and variables are typed with type or interface.
// The Nav page will show a meny where the user can navigate between the "Booking" page, the "Confirmation" page. 
//There's a hamburger meny icon component that will show on all the pages, including the "Nav" page. 
// The hamburger meny icon will redirect to "Nav" page when clicked, where the user can navigate between the "Booking" page, the "Confirmation" page.
// When on the "Nav" page the user can click on the hamburger menu to get redirected to the previous page theyhad loaded before entering the "Nav" page.

import { useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navContainer}>
      <menu className={styles.menu}>
        <div className={styles.menuItem} onClick={() => navigate('/booking')}>Booking</div>
        <div className={styles.menuItem} onClick={() => navigate('/confirmation')}>Confirmation</div>
      </menu>
    </div>
  );
};

export default Nav;