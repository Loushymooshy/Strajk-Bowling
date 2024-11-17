import styles from './Price.module.css';

interface PriceProps {
  price: number;
}

const Price = ({
    price
     }:
    PriceProps
    ) => {
        
  return (
    <div className={styles.label}>
      <span className={styles.labelText}>
        Total Price
      </span>
      <section className={styles.border}>
        <p>
          {price}
        </p>
      </section>
    </div>
  );
};

export default Price;