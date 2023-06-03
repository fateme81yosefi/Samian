import Message from '../Message/Message';
import './Home.css';
import data from '../../Data/data.json';
// import { setDataAction  } from '../../Redux/Action'
import {useEffect} from "react"

function Home() {

  // useEffect(() => {
  //   setDataAction(JSON.stringify(data));
  //   console.log(Text)
  // }, [])


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