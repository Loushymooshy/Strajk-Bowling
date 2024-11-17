
import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  onSubmit: () => void
  text: string;
}

const SubmitButton = ({
  onSubmit, text
}: 
  SubmitButtonProps
) => {
  return (
    <div className={styles.container}>
    <button className={styles.submitButton} onClick={onSubmit}>{text}</button>
    </div>
  )
}

export default SubmitButton