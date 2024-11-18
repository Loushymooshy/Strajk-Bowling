import styles from './ErrorText.module.css'


interface ErrorTextProps {
    message: string
}

const ErrorText = ({
    message
}:
ErrorTextProps

) => {
  return (

    <div className={styles.error}>{message}</div>
  )
}

export default ErrorText