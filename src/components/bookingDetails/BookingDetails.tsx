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
        <section className={styles.border}>
        <p>
            {people}
        </p>
        </section>

        <span className={styles.labelText}>
            lanes
        </span>
        <section className={styles.border}>
        <p>
            {lanes}
        </p>
        </section>
        
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