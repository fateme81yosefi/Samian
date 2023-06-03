import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from './actions'



function Home() {
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(setText(event.target.value))
  }

  let data = require('../../Data/data.json');

    console.log(data.data);
  ;

  return (
    <div className="Home">
      <Message></Message>
    </div>
  );
}

export default Home;
