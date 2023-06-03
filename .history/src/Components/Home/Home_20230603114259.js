import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText } from '../../Redux/Action'
import { connect } from 'react-redux';
import { useEffect } from 'react';


function Home() {


  // useEffect(() => {
  //   console.log(Text.data)
  // }, [Text])
  


  let data = require('../../Data/data.json');

  
  const dispatch = useDispatch()

  dispatch(setText(data.data))
  console.log(Text);

  return (
    <div className="Home">
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
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
