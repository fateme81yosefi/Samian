import Message from '../Message/Message';
import './Home.css';

import { useDispatch } from 'react-redux'
import { setText , getData } from '../../Redux/Action'
import { connect } from 'react-redux';
import { useEffect } from 'react';


function Home() {


  export const getData = () => dispatch => {
    dispatch({
        type: GET_DATA,
        payload: data
    });
};
  


  let data = require('../../Data/data.json');

  
  const dispatch = useDispatch()

  dispatch(setText(data.data))
  console.log(data.data);

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