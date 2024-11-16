//Typescript file for the form component.
//The input fields for the Booking form.
// submit Button is a separate component that will be added on the Booking page.
//Typescript file for the form component.
//The input fields for the Booking form.
// submit Button is a separate component that will be added on the Booking page.
import { useState, FocusEvent } from 'react';
import styles from './Form.module.css';
import handleChange from '../../utils/HandleChange';

interface FormData {
    date: string;
    time: string;
    bowlers: number;
    lanes: number;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        date: '',
        time: '',
        bowlers: 1,
        lanes: 1,
    });

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.type === 'date' || e.target.type === 'time') {
            e.target.showPicker();
        }
    };

    const getLaneSuffix = (lanes: number) => {
        return lanes > 1 ? 'lanes' : 'lane';
    };
    
    const getSuffixClass = (value: number) => {
        return value > 9 ? `${styles.suffix} ${styles.suffixRight}` : styles.suffix;
    };
    
    return (
        <div className={styles.container}>
            <label>
                <span className={styles.labelText}>date</span>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.border}
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
                        className={`${styles.border} ${styles.redBorder} ${styles.red}`}
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
                        className={styles.border}
                        type="number"
                        max={40}
                        min={1}
                        name="bowlers"
                        value={formData.bowlers}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                    <span className={getSuffixClass(formData.bowlers)}>pers</span>
                </div>
            </label>
            <label>
                <span className={styles.labelText}>number of lanes</span>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.border}
                        type="number"
                        max={10}
                        min={1}
                        name="lanes"
                        value={formData.lanes}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                    <span className={getSuffixClass(formData.lanes)}>{getLaneSuffix(formData.lanes)}</span>
                </div>
            </label>
        </div>
    );
};

export default Form;