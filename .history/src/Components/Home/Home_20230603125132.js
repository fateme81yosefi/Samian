import Message from '../Message/Message';
import './Home.css';
import data from '../../Data/data.json';
import { setText  } from '../../Redux/Action'
import {useEffect} from "react"

// setText = () => {
//   return (dispatch) => {
//     const dataObject = JSON.parse(JSON.stringify(data));
//     const dataArray = dataObject;
//     dispatch({ type: 'SET_TEXT', payload: dataArray });
//   }
// }

function Home() {

  useEffect(() => {
    setText(JSON.stringify(data));
  }, [])

  console.log(Text)

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

export default (Home)