// Svg logo and text underneath that can change based on props.

import logo from '../../assets/logo.svg';
import styles from './LogoText.module.css';

const LogoText = ({
    text, className,
   }: {
   text: string;
   className?: string;
}) => {

  return (
    <>
    <div className={`${styles.container} ${className}`}>
    <img className={styles.logo} src={logo} ></img>
    <h1 className={styles.text}>{text}</h1>
    </div>
    </>
  )
}

export default LogoText