import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from './actions'



function Home() {
 

  let data = require('../../Data/data.json');

    console.log(data.data);
  ;
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(setText(data.data))
  }
  return (
    <div className="Home">
      <Message></Message>
    </div>
  );
}

export default Home;
