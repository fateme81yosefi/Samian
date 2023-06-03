import Message from '../Message/Message';
import './Home.css';

function Home() {
  const data = useSelector(state => state.data)
  console.log(data)
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