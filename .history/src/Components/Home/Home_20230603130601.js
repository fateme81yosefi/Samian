import Message from '../Message/Message';
import './Home.css';
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