import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from '../../Redux/Action'



function Home() {


  let data = require('../../Data/data.json');

  // console.log(data.data);
  
  const dispatch = useDispatch()

  dispatch(setText(data.data))
  
  return (
    <div className="Home">
      <Message></Message>
    </div>
  );
}

export default ;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
