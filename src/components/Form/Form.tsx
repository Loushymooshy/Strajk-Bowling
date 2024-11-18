//Typescript file for the form component.
//The input fields for the Booking form.
// submit Button is a separate component that will be added on the Booking page.
//Typescript file for the form component.
//The input fields for the Booking form.
// submit Button is a separate component that will be added on the Booking page.
import { useEffect } from 'react';
import styles from './Form.module.css';
import handleChange from '../../utils/HandleChange';

interface FormData {
  date: string;
  time: string;
  bowlers: number;
  lanes: number;
}

interface FormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const Form = ({ formData, setFormData }: FormProps) => {

  useEffect(() => {
    import('./suffix').then((module) => {
      module.default('bowlers-input', 'bowlers-suffix');
      module.default('lanes-input', 'lanes-suffix');
    });
  }, []);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.type === 'date' || e.target.type === 'time') {
      e.target.showPicker();
    }
  };

  const getLaneSuffix = (lanes: number) => {
    return lanes > 1 ? 'lanes' : 'lane';
  };

  return (
    <div className={styles.container}>
      <label>
        <span className={styles.labelText}>date</span>
        <div className={styles.inputContainer}>
          <input
            className={styles.data}
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => handleChange(e, formData, setFormData)}
            onFocus={handleFocus}
          />
        </div>
      </label>
      <label>
        <span className={`${styles.labelText} ${styles.red}`}>time</span>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.data} ${styles.redBorder} ${styles.red}`}
            type="time"
            name="time"
            value={formData.time}
            onChange={(e) => handleChange(e, formData, setFormData)}
            onFocus={handleFocus}
          />
        </div>
      </label>
      <label>
        <span className={styles.labelText}>number of awesome bowlers</span>
        <div className={styles.inputContainer}>
          <input
            className={styles.data}
            id="bowlers-input"
            type="number"
            max={40}
            min={1}
            name="bowlers"
            value={formData.bowlers}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <span id="bowlers-suffix" className={styles.suffixs}>pers</span>
        </div>
      </label>
      <label>
        <span className={styles.labelText}>number of lanes</span>
        <div className={styles.inputContainer}>
          <input
            className={styles.data}
            id="lanes-input"
            type="number"
            max={10}
            min={1}
            name="lanes"
            value={formData.lanes}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <span id="lanes-suffix" className={styles.suffixs}>{getLaneSuffix(formData.lanes)}</span>
        </div>
      </label>
    </div>
  );
};

export default Form;