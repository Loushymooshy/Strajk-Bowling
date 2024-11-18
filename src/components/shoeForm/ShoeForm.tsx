// form input for shoe size. There's a button to add more shoe sizes for more players. and a button to remove the input field for the shoe size.


import styles from './ShoeForm.module.css';
import minus from '../../assets/-.svg';
import plus from '../../assets/+.svg';

interface ShoeFormProps {
  shoeSizes: number[];
  setShoeSizes: (sizes: number[]) => void;
}

const ShoeForm = ({ shoeSizes, setShoeSizes }: ShoeFormProps) => { //This component will render the shoe size input fields and buttons to add or remove them.
  const addShoeSize = () => {
    setShoeSizes([...shoeSizes, 16]); 
  };

  const removeShoeSize = (index: number) => { //This function will remove the shoe size input field based on the index.
    setShoeSizes(shoeSizes.filter((_, i) => i !== index));
  };

  const handleShoeSizeChange = (index: number, value: number) => { //This function will update the shoe size based on the index and value.
    const newShoeSizes = [...shoeSizes];
    newShoeSizes[index] = value;
    setShoeSizes(newShoeSizes);
  };

  const shoeSizeOptions = Array.from({ length: 35 }, (_, i) => i + 16); 

  return (
    <div className={styles.Wrapper}> 
    <div className={styles.shoesContainer}>
      {shoeSizes.map((size, index) => (
        <div key={index} className={styles.Container}>
          <label className={styles.label}>
            <span className={styles.labelText}>Shoe Size</span>
            <div className={styles.inputContainer}>
              <span className={styles.preffix}>Euro</span>
              <select
                className={styles.border}
                value={size}
                onChange={(e) => handleShoeSizeChange(index, parseInt(e.target.value))}
              >
                {shoeSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <button
            type="button"
            onClick={() => removeShoeSize(index)}
            className={styles.removeButton}
          >
            <img src={minus} />
          </button>
        </div>
      ))}
      
    </div>
    <button type="button" onClick={addShoeSize} className={styles.addButton}>
        <img src={plus} />
      </button>
    </div>
  );
};

export default ShoeForm;