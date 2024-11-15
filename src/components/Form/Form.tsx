//Typescript file for the form component.
//The input fields for the Booking form.
// submit Button is a separate component that will be added on the Booking page.
//Typescript file for the form component.
//The input fields for the Booking form.
// submit Button is a separate component that will be added on the Booking page.
import { useState, ChangeEvent, FocusEvent } from 'react';
import styles from './Form.module.css';

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
        bowlers: 0,
        lanes: 0,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.type === 'date' || e.target.type === 'time') {
            e.target.showPicker();
        }
    };

    return (
        <div className={styles.container}>
            <label>
                <span className={styles.labelText}>date</span>
                <input
                    className={styles.border}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </label>
            <label>
                <span className={`${styles.labelText} ${styles.red}`}>time</span>
                <input
                    className={`${styles.border} ${styles.redBorder} ${styles.red}`}
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </label>
            <label>
                <span className={styles.labelText}>number of awesome bowlers</span>
                <input
                    className={styles.border}
                    type="number"
                    name="bowlers"
                    value={formData.bowlers}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span className={styles.labelText}>number of lanes</span>
                <input
                    className={styles.border}
                    type="number"
                    name="lanes"
                    value={formData.lanes}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default Form;