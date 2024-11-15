//Made with typescript, where every state, props and variables are typed with type or interface.
// When the app is initally loaded, the user will see a welcoming page. The user will click anywhere on the page to get redirected to the "Booking" page.

import { useNavigate } from 'react-router-dom';

const Loading = (): JSX.Element => {
  const navigate = useNavigate();

  const handlePageClick = () => {
    navigate('/booking');
  };

  return (
    <div onClick={handlePageClick}>
      <h1>Loading Page</h1>
    </div>
  );
};

export default Loading;