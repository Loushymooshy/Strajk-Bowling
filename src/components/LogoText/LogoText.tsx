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
    <figure className={styles.container}>
    <img className={styles.logo} src={logo} ></img>
    <figcaption className={styles.text}>{text}</figcaption>
    </figure>
    </>
  )
}

export default LogoText