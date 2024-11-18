//this shows the details of the booking made by the user, sent in as props.

import styles from './BookingDetails.module.css'


interface BookingDetailsProps {

    when: string;
    people: number;
    lanes: number;
    id: number;
    }

const BookingDetails = ({
when, people, lanes, id
}: 
BookingDetailsProps
) => {

  return (
    <div className={styles.label}>
        <span className={styles.labelText}>
            when
        </span>
        <section className={styles.border}>
        <p> 
            {when}
        </p>
        </section>

        <span className={styles.labelText}>
            who
        </span>
        <div className={styles.inputContainer}>
            <section className={styles.details}>
            <p>
                {people}
            </p>
            </section>
            <span className={styles.preffix}>Pers</span>
        </div>

    
        <span className={styles.labelText}>
            lanes
        </span>
        <div className={styles.inputContainer}>
            <section className={styles.details}>
            <p>
                {lanes}
            </p>
            </section>
            <span className={styles.preffix}>lane</span>
        </div>
        
        <span className={styles.labelText}>
            booking number
        </span>
        <section className={styles.border}>
        <p>
            {id}
        </p>
        </section>
       
    </div>
  )
}

export default BookingDetails