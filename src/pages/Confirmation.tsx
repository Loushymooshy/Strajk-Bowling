//Made with typescript, where every state, props and variables are typed with type or interface.
// The confirmation page will show the booking response from the server, including the booking id and the total price of the booking. 
//"when", "lanes", "people", "shoes" "price" "id" and "active" are the properties of the booking object.
// "when", "lanes", people, id, and price are the properties that will visually show up on the confirmation site.
import { useLocation } from 'react-router-dom';
import LogoText from '../components/LogoText/LogoText';
import H3 from '../components/h3Line/H3Line';
import SubmitButton from '../components/submitButton/SubmitButton';
import BookingDetails from '../components/bookingDetails/BookingDetails';
import Price from '../components/price/Price';
import Menu from '../components/menu/Menu';

const Confirmation = () => {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return (
      <div>
        <LogoText text="oops!"/>
        <H3 text="Booking details"/>
        <p>No booking details available..</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Menu />
      <LogoText text="see you soon!"/>
      <H3 text="Booking details"/>
      <BookingDetails
        when={booking.when}
        people={booking.people}
        lanes={booking.lanes}
        id={booking.id}
      />
      <Price price={booking.price} />
      <SubmitButton onSubmit={() => {}} text="Sweet, lets go!"/>
    </div>
  );
};

export default Confirmation;