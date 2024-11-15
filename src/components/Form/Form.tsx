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
        bowlers: 1,
        lanes: 1,
    });

   
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'number' ? parseInt(value) : value,
        });
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.type === 'date' || e.target.type === 'time') {
            e.target.showPicker();
        }
    };

    const getLaneSuffix = (lanes: number) => {
        return lanes > 1 ? 'lanes' : 'lane';
    };
    
    const getSuffixClass = (value: number, type: 'lanes' | 'bowlers') => {
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                    <span className={getSuffixClass(formData.bowlers, 'bowlers')}>pers</span>
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
                        onChange={handleChange}
                    />
                    <span className={getSuffixClass(formData.lanes, 'lanes')}>{getLaneSuffix(formData.lanes)}</span>
                </div>
            </label>
        </div>
    );
};

export default Form;