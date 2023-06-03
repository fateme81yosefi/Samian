import Message from '../Message/Message';
import './Home.css';
import data from '../../';
import { setText , getData } from '../../Redux/Action'
import { connect } from 'react-redux';
import {useEffect} from "react"

export const setText = () => {
  return (dispatch) => {
    const dataObject = JSON.parse(JSON.stringify(data));
    const dataArray = dataObject;
    dispatch({ type: 'SET_TEXT', payload: dataArray });
  }
}

function Home(props) {
  useEffect(() => {
    props.fetchData();
  }, [])

  console.log(props.Text)

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
