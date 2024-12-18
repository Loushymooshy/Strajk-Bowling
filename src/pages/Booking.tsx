// View where you book Date and Time, Number of players, and Number of lanes. 
// You're also available to book the bowling shoes beforehand, inputting the shoe size for each participant. for every player, a form will get rendered to input the shoe size.
// The amout of players and shoes should be validated to be the same.
// Only 4 players per lane are allowed, and the amount of players should be validated so it doesn't exceed 4 per lane.
// Made with typescript, where every state, props and variables are typed with type or interface.
// When the user clicks on the "Book" button, a booking request will be made to the server to book the lane, and the user will be redirected to the "Confirmation" page.
// The booking response will inlcude a booking id, which will be used to show the booking details on the "Confirmation" page. The server will calculate the total price of the booking based on the number of players and lanes. 
// process.env.API_KEY is the API key for the server.
// process.env.API_URL is the URL for the server.

import { useState } from 'react';
import H3 from '../components/h3Line/H3Line';
import LogoText from '../components/LogoText/LogoText';
import Form from '../components/Form/Form';
import SubmitButton from '../components/submitButton/SubmitButton';
import ShoeForm from '../components/shoeForm/ShoeForm';
import Menu from '../components/menu/Menu';
import { useNavigate } from 'react-router-dom';
import ErrorText from '../error/errorTextComponent/ErrorText';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

interface FormData {
  date: string;
  time: string;
  bowlers: number;
  lanes: number;
}

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    bowlers: 1,
    lanes: 1,
  });
  const [shoeSizes, setShoeSizes] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (): Promise<void> => { //This function will handle the form submission. It will validate the form data and send a booking request to the server.
    // Validation
    if (!formData.date || !formData.time || formData.bowlers < 1 || formData.lanes < 1) {
      setError('All forms must be filled before submission.');
      return;
    }

    if (shoeSizes.length !== formData.bowlers) {
      setError(`You must enter exactly ${formData.bowlers} shoe sizes.`);
      return;
    }

    if (formData.bowlers > formData.lanes * 4) {
      setError('Maximum 4 bowlers per lane.');
      return;
    }

    const bookingRequest = {
      when: `${formData.time}, ${formData.date}`,
      lanes: formData.lanes,
      people: formData.bowlers,
      shoes: shoeSizes,
    };

    try {
      const response = await fetch(`${API_URL}`, { //This function will send a booking request to the server and redirect the user to the confirmation page.
        method: 'POST',
        headers: {
          'x-api-key': API_KEY || '',
        },
        body: JSON.stringify(bookingRequest),
      });

      const data = await response.json();
      navigate('/confirmation', { state: data });
    } catch (error) {
      console.error('Error booking lane:', error);
      setError('Error booking lane. Please try again.');
    }
  };

  return (
    <>
      <div className="container">
        <Menu />
        <LogoText text="Booking" />
        <H3 text="when, what & who" />
        <Form formData={formData} setFormData={setFormData} />
        <H3 text="Shoes" />
        <ShoeForm shoeSizes={shoeSizes} setShoeSizes={setShoeSizes} />
        {error && <ErrorText message={error} />}
        <SubmitButton onSubmit={handleSubmit} text="STRIIIIIIKE!" />
      </div>
    </>
  );
};

export default Booking;