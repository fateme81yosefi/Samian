import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from './actions'

const MyComponent = () => {
 

  return (
    <input type="text" onChange={handleInputChange} />
  )
}

function Home() {
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
