import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from '../../Redux/Action'
import { connect } from 'react-redux';


function Home() {


  let data = require('../../Data/data.json');

  console.log(data.data);
  
  const dispatch = useDispatch()

  dispatch(setText(بیمنلدان))
  
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
    settext: () => dispatch(setText()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
