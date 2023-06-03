import Message from '../Message/Message';
import './Home.css';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setText , getData } from '../../Redux/Action'
import { connect } from 'react-redux';
import { useEffect } from 'react';

export const fetchData = () => {
  return (dispatch) => {
    const dataObject = JSON.parse(JSON.stringify(data));
    const dataArray = dataObject.myData;
    dispatch({ type: 'SET_TEXT', payload: dataArray });
  }
}
function Home() {



  
  const dispatch = useDispatch()

  let data = require('../../Data/data.json');
  const x=JSON.parse(data)
    dispatch({ type: 'SET_TEXT', text: x });

  
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
