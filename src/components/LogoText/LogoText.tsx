// Svg logo and text underneath that can change based on props.

import logo from '../../assets/logo.svg';
import styles from './LogoText.module.css';

const LogoText = ({
    text,
   }: {
   text: string;
}) => {

  return (
    <>
    <div className={styles.container}>
    <img className={styles.logo} src={logo} ></img>
    <h1 className={styles.text}>{text}</h1>
    </div>
    </>
  )
}

export default LogoText