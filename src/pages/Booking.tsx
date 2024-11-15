// View where you book Date and Time, Number of players, and Number of lanes. 
// You're also available to book the bowling shoes beforehand, inputting the shoe size for each participant. for every player, a form will get rendered to input the shoe size.
// The amout of players and shoes should be validated to be the same.
// Only 4 players per lane are allowed, and the amount of players should be validated so it doesn't exceed 4 per lane.
// Made with typescript, where every state, props and variables are typed with type or interface.
// When the user clicks on the "Book" button, a booking request will be made to the server to book the lane, and the user will be redirected to the "Confirmation" page.
// The booking response will inlcude a booking id, which will be used to show the booking details on the "Confirmation" page. The server will calculate the total price of the booking based on the number of players and lanes. 


import H3 from '../components/h3Line/H3Line';
import LogoText from '../components/LogoText/LogoText';
import Form from '../components/Form/Form';
import SubmitButton from '../components/submitButton/SubmitButton';

const Booking = () => {
  return (
    <>
    <div>
    <LogoText text="Booking"/>
    <H3 text="when, what & who"/>
    <Form/>
    <H3 text="Shoes"/>
    <SubmitButton/>
    
    </div>
    </>
  )
}

export default Booking