import Message from '../Message/Message';
import './Home.css';
import data from '../../Data/data.json';
import { setText  } from '../../Redux/Action'
import {useEffect} from "react"

function Home() {

  useEffect(() => {
    setText(JSON.stringify(data));
  }, [])


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