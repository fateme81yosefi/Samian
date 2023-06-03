import Message from '../Message/Message';
import './Home.css';
import data from '../../Data/data.json';
import { setText , getData } from '../../Redux/Action'
import { connect } from 'react-redux';

export const fetchData = () => {
  return (dispatch) => {
    const dataObject = JSON.parse(JSON.stringify(data));
    const dataArray = dataObject;
    dispatch({ type: 'SET_TEXT', payload: dataArray });
  }
}

function Home() {
  fetchData()
  console.log(state.text)
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
