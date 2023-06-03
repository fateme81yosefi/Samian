import Message from '../Message/Message';
import './Home.css';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setText , getData } from '../../Redux/Action'
import { connect } from 'react-redux';
import { useEffect } from 'react';


function Home() {



  
  const dispatch = useDispatch()

  let data = require('../../Data/data.json');
  axios.get(data).then(res => {
    dispatch({ type: 'SET_TEXT', data: res.Text });
  });

  
  return (
    <div className="Home">
      <Message></Message>
      <Message></Message>
      <Message></Message>
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
    getData: () => dispatch(getData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
