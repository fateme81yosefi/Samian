import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from '../../Redux/Action'
import { connect } from 'react-redux';
import { setText } from '../../Redux/Action'; // فایل action های شما


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
    Text: state.Text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setText: () => dispatch(setText()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
