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
      <div className={styles.inputContainer}>
            <span className={styles.preffix}>total</span>
            <div className={styles.detailsWrapper}>
              <section className={styles.details}>
              <p>
                  {price}
              </p>
              </section>
              <span className={styles.suffix}>sek</span>
            </div>
            </div>
    </div>
  );
};

export default Price;