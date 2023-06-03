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
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCount()),
    decrement: () => dispatch(decrementCount()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
